const db = require('../models')
const completed_task = require('../models/completed_task')
const { User, Admin, Task, Assigned_Task, Completed_Task } = db
const Op = db.Sequelize.Op

exports.findTasks = async (req, res) => {}

exports.createTask = async (req, res) => {
  const { admin_id, form_json_data } = req.body

  try {
    const taskData = await Task.create({ admin_id, form_json_data })

    res.status(200).send({
      success: true,
      message: 'Task create success',
      messge2: null,
      taskData,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}

exports.createCompletedTask = async (req, res) => {
  const { assigned_task_id, response_json_data } = req.body

  try {
    const taskData = await Completed_Task.create({
      assigned_task_id,
      response_json_data,
    })

    res.status(200).send({
      success: true,
      message: 'Completed Task create success',
      messge2: null,
      taskData,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}

exports.createAssignedTask = async (req, res) => {
  const { client_id, task_id, completed } = req.body

  try {
    const taskData = await Assigned_Task.create({
      client_id,
      task_id,
      completed,
    })

    res.status(200).send({
      success: true,
      message: 'Assigned Task create success',
      messge2: null,
      taskData,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}

exports.findAll = async (req, res) => {
  try {
    if (req.session.user && req.session.user.email !== req.query.user) {
      return
    }
    const userInfo = await User.findAll({
      raw: true,
      where: {
        email: req.query.user,
      },
      attributes: ['admin_id'],
    })

    const taskData = await Task.findAll({
      where: {
        admin_id: userInfo[0].admin_id,
      },
      attributes: ['uuid', 'form_json_data'],
    })

    res.status(200).send({
      success: true,
      message: 'Successfully find the tasks on user',
      messge2: null,
      taskData,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}

exports.findAllAssignedTasks = async (req, res) => {
  try {
    const taskData = await Assigned_Task.findAll({
      where: {
        client_id: 1,
      },
      include: ['task'],
    })

    res.status(200).send({
      success: true,
      message: 'Find assigned tasks ',
      messge2: null,
      taskData,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}

exports.findAllCompletedTasks = async (req, res) => {
  try {
    const taskData = await Completed_Task.findAll({
      where: {
        assigned_task_id: 1,
      },
      include: ['assigned_task'],
    })

    res.status(200).send({
      success: true,
      message: 'Find completed tasks ',
      messge2: null,
      taskData,
    })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task',
    })
  }
}
