const express = require('express')
const router = express.Router()
const users = require('../controller/user.controller')

router.get('/', (req, res) => {
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.send('User New Form')
})

router.get('/:email', users.findOne)

router.post('/admin', users.createAdmin)

router.get('/admin/:companyName', users.findAdmin)

module.exports = router
