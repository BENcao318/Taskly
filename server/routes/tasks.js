const express = require('express')
const router = express.Router()
const tasks = require('../controller/task.controller')

router.get('/', (req, res) => {
  res.send({
    query: req.query,
  })
})

module.exports = router
