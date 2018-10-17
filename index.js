require('dotenv').config()
const express = require('express')

const middleware = require('./middleware/')
const router = require('./router')

const app = express()
app.set('view engine', 'ejs')

middleware(app)
router(app)

const port = process.env.NODE_ENV === 'development' ? 3000 : process.env.PORT
app.listen(port, () => {
  console.log('listening on port ' + port)
})
