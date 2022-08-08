const express = require('express')
const router = express.Router()
const users = require('../controller/user.controller')

router.get('/', (req, res) => {
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.send('User New Form')
})

router.get('/signout', users.signOut)
// router.get('/:email', () => console.log('test'))

router.post('/newAdmin', users.createAdmin)

router.post('/newClient', users.createClient)

router.post('/signin', users.signIn)

router.get('/admin/:companyName', users.findAdmin)

router.get('/clients', users.findAllClents)

router.get('/client-info', users.findClientInfo)

module.exports = router
