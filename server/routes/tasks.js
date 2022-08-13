const express = require('express')
const router = express.Router()
const tasks = require('../controller/task.controller')

router.post('/new', tasks.createTask)

router.post('/assigned/new', tasks.createAssignedTask)

router.post('/completed/new', tasks.createCompletedTask)

router.delete('/', tasks.deleteTask)

router.get('/', tasks.findAll)

router.get('/assigned', tasks.findAllAssignedTasks)

router.get('/completed', tasks.findAllCompletedTasks)

module.exports = router
