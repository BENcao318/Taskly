const db = require('../models')
const User = db.User
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const user = {
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    user_logo: req.body.user_logo,
  }

  User.create(user)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User',
      })
    })
}

exports.findAll = (req, res) => {}

exports.findOne = (req, res) => {
  const id = req.params.id
  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving User with id=${id}, ${err}`,
      })
    })
}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}

exports.deleteAll = (req, res) => {}
