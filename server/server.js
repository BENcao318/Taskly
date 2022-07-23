require('dotenv').config({ path: __dirname + '/.env' })

const PORT = process.env.PORT || 8080
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const db = require('./models')

//Todo
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi' })
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(PORT, async () => {
  console.log(`App listening on port: ${PORT}`)
  await db.sequelize.authenticate()
  console.log('Database Connected!')
})
