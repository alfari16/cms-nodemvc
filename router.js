const router = require('express').Router()
const { home, explore, upload, profile } = require('./controller/')

router.get('/', home)
router.get('/explore', explore)
router.get('/upload', upload)
router.get('/profile', profile)

module.exports = app => {
  app.use('/', router)
}