'use strict'

const faker = require('faker')

const photo = []

for (let index = 1; index < 11; index++) {
  photo.push({
    userId: index,
    url: faker.image.image()
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
    return queryInterface.bulkInsert('photos', photo, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('photos', null, {})
  }
}
