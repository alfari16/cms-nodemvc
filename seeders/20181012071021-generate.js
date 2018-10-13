'use strict'

const faker = require('faker')
const bcrypt = require('bcrypt')

const user = []

for (let index = 1; index < 11; index++) {
  user.push({
    name: faker.name.firstName(),
    password: bcrypt.hashSync(`admin${index}`, 10),
    email: faker.internet.email()
  })
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', user, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {})
  }
}
