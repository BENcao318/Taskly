const db = require('../models')
const { User, Admin, Client, Assigned_Task, Task } = db
const Op = db.Sequelize.Op
const { hash, compare } = require('bcrypt')

exports.createAdmin = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const admin = {
    company_name: req.body.company_name,
  }

  try {
    const email = await User.findAll({
      where: {
        email: req.body.email.toLowerCase(),
      },
    })

    if (email.length !== 0) {
      return res.status(403).send({ message: 'Email already exist.' })
    }

    const adminData = await Admin.create(admin)

    let hashedPassword = await hash(req.body.password, 10)

    const userInfo = {
      email: req.body.email.toLowerCase(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: hashedPassword,
      admin_id: adminData.id,
      client_id: null,
    }

    const userData = await User.create(userInfo)

    const user = {
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name,
      company_name: adminData.company_name,
    }

    req.session.user = user
    res.status(200).send({
      success: true,
      message: 'Signup success',
      messge2: null,
      user,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the User',
    })
  }
}

exports.createClient = async (req, res) => {
  const { clientInfo, assignedTasks, adminEmail } = req.body

  try {
    //check if the client email already exist in the database
    const clientEmail = await User.findAll({
      where: {
        email: clientInfo.email.toLowerCase(),
      },
    })

    if (clientEmail.length !== 0) {
      return res.status(403).send({ message: 'Email already exist.' })
    }

    const adminData = await User.findAll({
      raw: true,
      where: {
        email: adminEmail,
      },
      attributes: ['admin_id'],
    })

    const clientData = await Client.create({
      admin_id: adminData[0].admin_id,
      phone_number: clientInfo.phoneNumber,
      summary_of_needs: clientInfo.summaryOfNeeds,
    })

    const userData = await User.create({
      first_name: clientInfo.firstName,
      last_name: clientInfo.lastName,
      email: clientInfo.email.toLowerCase(),
      password: '123', //use this for sending secure code to the user
      admin_id: null,
      client_id: clientData.id,
    })

    const bulkTasks = assignedTasks.map((task) => ({
      client_id: clientData.id,
      task_id: task.id,
      completed: false,
    }))

    const createdAssignedTasks = await Assigned_Task.bulkCreate(bulkTasks)

    res.status(200).send({
      success: true,
      message: 'Client created successfully',
      messge2: null,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}

exports.findClientInfo = async (req, res) => {
  const uuid = req.query.client_uuid

  try {
    const clientData = await User.findAll({
      raw: true,
      where: {
        uuid: uuid,
      },
      include: [
        {
          model: Client,
          as: 'client',
          attributes: ['phone_number', 'summary_of_needs'],
        },
      ],
      attributes: ['email', 'first_name', 'last_name', 'client_id'],
    })

    const assignedTaskData = await Assigned_Task.findAll({
      raw: true,
      where: {
        client_id: clientData[0].client_id,
      },
      include: [
        {
          model: Task,
          as: 'task',
          attributes: ['form_json_data', 'id'],
        },
      ],
      attributes: ['completed'],
    })

    const assignedTasks = assignedTaskData.map((task) => {
      return {
        form_json_data: task['task.form_json_data'],
        id: task['task.id'],
      }
    })

    const clientInfo = {
      firstName: clientData[0].first_name,
      lastName: clientData[0].last_name,
      email: clientData[0].email,
      phoneNumber: clientData[0]['client.phone_number'],
      summaryOfNeeds: clientData[0]['client.summary_of_needs'],
    }

    res.status(200).send({
      success: true,
      message: 'Successfully found the request client info',
      messge2: null,
      clientInfo,
      assignedTasks,
    })
  } catch (err) {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while finding all the clients',
    })
  }
}

exports.findAllClients = async (req, res) => {
  // const email = req.session.user.email
  const email = 'ben@demo.com'

  try {
    const adminData = await User.findAll({
      raw: true,
      where: {
        email: email,
      },
    })
    const admin_id = adminData[0].admin_id

    const clientData = await Client.findAll({
      raw: true,
      include: [
        {
          model: Admin,
          as: 'admin',
          where: {
            id: admin_id,
          },
          attributes: [],
        },
      ],
      attributes: ['id', 'phone_number', 'summary_of_needs'],
    })

    const clientInfo = await User.findAll({
      raw: true,
      where: {
        client_id: clientData.map((client) => {
          return client.id
        }),
      },
      attributes: ['first_name', 'last_name', 'email', 'uuid'],
    })

    const clients = clientData.map((client, index) => {
      return {
        uuid: clientInfo[index].uuid,
        firstName: clientInfo[index].first_name,
        lastName: clientInfo[index].last_name,
        email: clientInfo[index].email,
        phoneNumber: client.phone_number,
        summaryOfNeeds: client.summary_of_needs,
      }
    })
    const taskData = await Assigned_Task.findAll({
      raw: true,
      where: {
        client_id: clientData[0].id,
      },
    })

    res.status(200).send({
      success: true,
      message: 'Found all clients',
      messge2: null,
      taskData,
      clients,
    })
  } catch (err) {
    res.status(500).send({
      message:
        err.message || 'Some error occurred while finding all the clients',
    })
  }
}

exports.signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findAll({
      where: {
        email,
      },
      include: ['admin'],
    })

    if (user.length !== 0) {
      const passwordMatched = await compare(
        password,
        user[0].dataValues.password
      )

      if (passwordMatched) {
        const userData = {
          email: user[0].dataValues.email,
          first_name: user[0].dataValues.first_name,
          last_name: user[0].dataValues.last_name,
          company_name: user[0].dataValues.admin.dataValues.company_name,
        }

        req.session.user = userData
        res.status(200).send({
          success: true,
          message: 'Login success',
          messge2: null,
          user: userData,
        })
      } else {
        res.send({
          success: false,
          message: 'Login Failed',
          message2: 'Email and password did not match.',
        })
      }
    } else {
      res.send({
        success: false,
        message: 'Login Failed',
        message2: 'Email and password did not match.',
      })
    }
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving User with email=${email}, ${err}`,
    })
  }
}

exports.signOut = async (req, res) => {
  req.session.destroy()
  res.status(200).send({
    success: true,
    message: 'Signout success',
    message2: null,
  })
}

exports.findAdmin = async (req, res) => {
  const company_name = req.params.company_name

  try {
    const data = await Admin.findAll({
      where: {
        company_name,
      },
      include: ['user'], //associations
    })

    if (data.length !== 0) {
      res.status(200).send(data)
    } else {
      res.status(404).send({
        message: `Cannot find Admin with company name=${company_name}.`,
      })
    }
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving User with company name=${company_name}, ${err}`,
    })
  }
}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}

exports.deleteAll = (req, res) => {}
