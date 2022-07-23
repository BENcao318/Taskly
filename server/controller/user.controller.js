const db = require('../models')
const { User, Admin } = db
const Op = db.Sequelize.Op

exports.createAdmin = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const admin = {
    company_name: req.body.company_name,
    company_logo_url: req.body.company_logo_url,
    company_theme: req.body.company_theme,
  }
  try {
    const email = await User.findAll({
      where: {
        email: req.body.email,
      },
    })
    console.log(email)
    if (email.length !== 0) {
      return res.send({ message: 'Email already exist.' })
    }

    const adminData = await Admin.create(admin)

    const user = {
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
      admin_id: adminData.id,
      client_id: null,
      user_logo: req.body.user_logo,
    }

    const userData = await User.create(user)

    return res.status(200).send(userData)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the User',
    })
  }
}

exports.findAll = (req, res) => {}

exports.findOne = async (req, res) => {
  const email = req.params.email

  try {
    const data = await User.findAll({
      where: {
        email,
      },
      include: ['admin'],
    })

    if (data.length !== 0) {
      res.status(200).send(data)
    } else {
      res.status(404).send({
        message: `Cannot find User with email=${email}.`,
      })
    }
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving User with email=${email}, ${err}`,
    })
  }
}

exports.findAdmin = async (req, res) => {
  const company_name = req.params.companyName

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
