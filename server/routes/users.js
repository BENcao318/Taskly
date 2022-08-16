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

router.post('/new-admin', users.createAdmin)

router.post('/new-client', users.createClient)

router.post('/update-client', users.updateClient)

router.post('/signin', users.signIn)

router.post('/client/signin', users.clientSignIn)

router.post('/client-security-status', users.clientIsAuth)

router.post('/client/send-tasks', users.sendTasksToClient)

router.delete('/client', users.deleteClient)

router.get('/admin/:companyName', users.findAdmin)

router.get('/clients', users.findAllClients)

router.get('/client-info', users.findClientInfo)

module.exports = router
