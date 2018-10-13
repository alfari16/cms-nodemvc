const session = require('express-session')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
}

module.exports = app => {
  app.use(express.static('./public'))
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  const sessionOption = {
    secret: process.env.SECRET,
    resave: false,
    saveUnitialized: true
  }
  if (process.env.NODE_ENV === 'production') sessionOption.secure = true
  app.use(session(sessionOption))
  app.use('/api', cors)
}
