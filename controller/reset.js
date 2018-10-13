const { sequelize } = require('../models/index')

const reset = async () => {
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
  await sequelize.truncate()
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
}

module.export = () => reset()