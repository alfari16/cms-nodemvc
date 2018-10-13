'use strict'

const faker = require('faker')

const post = []

for (let index = 1; index < 11; index++) {
  post.push({
    userId: index,
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    link: faker.internet.url()
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
    return queryInterface.bulkInsert('posts', post, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('posts', null, {})
  }
}
