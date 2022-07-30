const db = require('../models')
const { User, Admin } = db
const Op = db.Sequelize.Op
const { hash, compare } = require('bcrypt')

exports.findTasks = async (req, res) => {}
