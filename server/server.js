require('dotenv').config({ path: __dirname + '/.env' })

const PORT = process.env.PORT || 8080
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const app = express()

const userRouter = require('./routes/users')
const taskRouter = require('./routes/tasks')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true,
  })
)
app.use(
  session({
    secret: 'user-secret',
    resave: false,
    saveUninitialized: false,
  })
)

app.use('/users', userRouter)
app.use('/tasks', taskRouter)

const db = require('./models')

const isAuth = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.send({
      success: false,
    })
  }
}

app.get('/me', isAuth, (req, res) => {
  const user = req.session.user
  res.status(200).send({
    success: true,
    message: 'Login success',
    messge2: null,
    user,
  })
})

//Todo
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hi' })
})

app.listen(PORT, async () => {
  console.log(`App listening on port: ${PORT}`)
  await db.sequelize.authenticate()
  console.log('Database Connected!')
})
