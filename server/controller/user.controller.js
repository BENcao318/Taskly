const db = require('../models')
const { User, Admin } = db
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

    const user = {
      email: req.body.email.toLowerCase(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: hashedPassword,
      admin_id: adminData.id,
      client_id: null,
    }

    const userData = await User.create(user)

    res.status(200).send(userData)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the User',
    })
  }
}

exports.findAll = (req, res) => {}

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

        req.session.user = email
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
