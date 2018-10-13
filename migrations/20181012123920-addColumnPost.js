'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */
    await queryInterface.renameColumn('posts', 'content', 'description')
    await queryInterface.addColumn('posts', 'link', Sequelize.STRING)
    // return queryInterface.addColumn('posts', 'pictureThumbnail', Sequelize.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.renameColumn('posts', 'description', 'content')
    await queryInterface.removeColumn('posts', 'link')
    // return queryInterface.removeColumn('posts', 'pictureThumbnail')
  }
}
