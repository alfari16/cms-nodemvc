'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.addColumn('users', 'pictureId', Sequelize.INTEGER)
    return queryInterface.addConstraint('users', ['pictureId'], {
      type: 'foreign key',
      references: {
        table: 'photos',
        field: 'id'
      },
      name: 'fk_user_profile_pic'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   await queryInterface.removeConstraint('users', 'fk_user_profile_pic')
   return queryInterface.removeColumn('users', 'pictureId')
  }
};
