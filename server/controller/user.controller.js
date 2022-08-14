const db = require('../models')
const { User, Admin, Client, Assigned_Task, Task } = db
const Op = db.Sequelize.Op
const { hash, compare } = require('bcrypt')
const helpers = require('../helpers/utils')

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

    const adminData = await User.findOne({
      raw: true,
      where: {
        email: adminEmail,
      },
      attributes: ['admin_id'],
    })

    const clientData = await Client.create({
      admin_id: adminData.admin_id,
      phone_number: clientInfo.phoneNumber,
      summary_of_needs: clientInfo.summaryOfNeeds,
    })

    const securityCode = helpers.generateRandomSecurityCode()
    // const encryptedSecurityCode = helpers.encryption(securityCode)

    const userData = await User.create({
      first_name: clientInfo.firstName,
      last_name: clientInfo.lastName,
      email: clientInfo.email.toLowerCase(),
      password: securityCode, //use this for sending secure code to the user
      admin_id: null,
      client_id: clientData.id,
    })

    if (assignedTasks.length !== 0) {
      const bulkTasks = assignedTasks.map((task) => ({
        client_id: clientData.id,
        task_id: task.id,
        completed: false,
      }))

      const createdAssignedTasks = await Assigned_Task.bulkCreate(bulkTasks)
    }

    res.status(200).send({
      success: true,
      message: 'Client created successfully',
      messge2: null,
      assignedTasks,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}

exports.updateClient = async (req, res) => {
  const { updatedClientInfo, updatedAssignedTasks } = req.body

  try {
    const clientData = await User.findAll({
      raw: true,
      where: {
        uuid: updatedClientInfo.uuid,
      },
      attributes: ['client_id'],
    })

    const updateClient = await Client.update(
      {
        phone_number: updatedClientInfo.phoneNumber,
        summary_of_needs: updatedClientInfo.summaryOfNeeds,
      },
      {
        where: { id: clientData[0].client_id },
      }
    )

    const updateUser = await User.update(
      {
        first_name: updatedClientInfo.firstName,
        last_name: updatedClientInfo.lastName,
        phone_number: updatedClientInfo.phoneNumber,
        email: updatedClientInfo.email.toLowerCase(), //todo check the email availability first.
      },
      {
        where: { uuid: updatedClientInfo.uuid },
      }
    )

    const currentClientAssignedTasks = await Assigned_Task.findAll({
      raw: true,
      where: {
        client_id: clientData[0].client_id,
      },
      attributes: ['task_id'],
    })

    const updatedTaskIdArr = updatedAssignedTasks.map((task) => task.id)
    const currentTaskIdArr = currentClientAssignedTasks.map(
      (task) => task.task_id
    )
    const assignedTasksIdToDeleteArr = currentTaskIdArr.filter(
      (task) => !updatedTaskIdArr.includes(task)
    )
    const assignedTasksIdToAddArr = updatedTaskIdArr.filter(
      (task) => !currentTaskIdArr.includes(task)
    )

    if (assignedTasksIdToDeleteArr.length !== 0) {
      const deleteAssignedTasks = await Assigned_Task.destroy({
        where: {
          [Op.and]: [
            { client_id: clientData[0].client_id },
            { task_id: assignedTasksIdToDeleteArr },
          ],
        },
      })
    }

    if (assignedTasksIdToAddArr.length !== 0) {
      const bulkTasks = assignedTasksIdToAddArr.map((id) => ({
        client_id: clientData[0].client_id,
        task_id: id,
        completed: false,
      }))

      const createdAssignedTasks = await Assigned_Task.bulkCreate(bulkTasks)
    }

    res.status(200).send({
      success: true,
      message: 'Client updated successfully',
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
    const clientData = await User.findOne({
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
        client_id: clientData.client_id,
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
      firstName: clientData.first_name,
      lastName: clientData.last_name,
      email: clientData.email,
      phoneNumber: clientData['client.phone_number'],
      summaryOfNeeds: clientData['client.summary_of_needs'],
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
  const email = req.session.user.email
  // const email = 'ben@demo.com'

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
      order: [['id', 'ASC']],
      attributes: ['id', 'phone_number', 'summary_of_needs'],
    })

    const clientInfo = await User.findAll({
      raw: true,
      where: {
        client_id: clientData.map((client) => {
          return client.id
        }),
      },
      order: [['client_id', 'ASC']],
      attributes: ['client_id', 'first_name', 'last_name', 'email', 'uuid'],
    })
    const assignedTasks = await Assigned_Task.findAll({
      raw: true,
      where: {
        client_id: clientData.map((client) => {
          return client.id
        }),
      },
      order: [['client_id', 'ASC']],
      attributes: ['client_id', 'task_id', 'completed'],
    })

    const clients = clientData.map((client, index) => {
      let numOfCompletedTasks = 0
      let numOfOutstandingTasks = 0

      assignedTasks.forEach((assignedTask) => {
        if (client.id === assignedTask.client_id) {
          if (assignedTask.completed) {
            numOfCompletedTasks++
          } else {
            numOfOutstandingTasks++
          }
        }
      })

      return {
        uuid: clientInfo[index].uuid,
        firstName: clientInfo[index].first_name,
        lastName: clientInfo[index].last_name,
        email: clientInfo[index].email,
        phoneNumber: client.phone_number,
        summaryOfNeeds: client.summary_of_needs,
        numOfCompletedTasks,
        numOfOutstandingTasks,
      }
    })

    res.status(200).send({
      success: true,
      message: 'Found all clients',
      messge2: null,
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
    const user = await User.findOne({
      where: {
        email,
      },
      include: ['admin'],
    })

    if (user) {
      const passwordMatched = await compare(password, user.dataValues.password)

      if (passwordMatched) {
        const userData = {
          email: user.dataValues.email,
          first_name: user.dataValues.first_name,
          last_name: user.dataValues.last_name,
          company_name: user.dataValues.admin.dataValues.company_name,
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

exports.clientSignIn = async (req, res) => {
  const { securityCode, client_uuid } = req.body
  try {
    const client = await User.findOne({
      raw: true,
      where: {
        uuid: client_uuid,
      },
    })

    if (client) {
      // const decryptedSecurityCode = helpers.decryption(client.password)

      if (securityCode === client.password) {
        // req.session.client = client
        // console.log('testtest66666666666', client)
        res.status(200).send({
          success: true,
          message: 'Client signin success',
          messge2: null,
        })
      } else {
        res.status(200).send({
          success: false,
          message: 'Login Failed',
          message2: 'Security Code does not match, please try again.',
        })
      }
    } else {
      res.send({
        success: false,
        message: 'Login Failed',
        message2: 'No such user',
      })
    }
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving user`,
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

exports.deleteClient = async (req, res) => {
  const client_uuid = req.body.client_uuid

  if (!req.session.user) {
    return res.status(500).send({
      success: false,
      message: 'User is not authenticated to delete',
      messge2: null,
    })
  }

  try {
    const clientData = await User.findOne({
      raw: true,
      where: {
        uuid: client_uuid,
      },
    })

    const client = await Client.findOne({
      where: {
        id: clientData.client_id,
      },
    })
    await client.destroy()

    res.status(200).send({
      success: true,
      message: 'Successfully delete the client',
      messge2: null,
    })
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving User with company name=${company_name}, ${err}`,
    })
  }
}

exports.sendTasksToClient = async (req, res) => {
  // if (!req.session.user) {
  //   return res.status(500).send({
  //     success: false,
  //     message: 'User is not authenticated to send tasks to client',
  //     messge2: null,
  //   })
  // }
  const { client_email } = req.body
  try {
    const clientData = await User.findOne({
      where: {
        email: client_email,
      },
    })

    if (clientData) {
      const clientUUID = clientData.uuid
      const securityCode = clientData.password
      // const decryptedSecurityCode = helpers.decryption(securityCode)
      // const clientPage = `localhost:3000/client/view?client_uuid=${clientUUID}`
      const sendEmail = helpers.sendEmail(clientUUID, securityCode)

      res.status(200).send({
        success: true,
        message: 'Successfully send the tasks to client',
        messge2: null,
      })
    } else {
      res.status(404).send({
        message: `Cannot find client with the email address.`,
      })
    }
  } catch (err) {
    console.log('testtestsetest6666666666666666', err)
    res.status(500).send({
      message: `Error retrieving User with client email, ${err}`,
    })
  }
}