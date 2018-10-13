'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */

    //posts
    await queryInterface.addConstraint('posts', ['userId'], {
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'id'
      },
      name: 'fk_post_user'
    })
    await queryInterface.addConstraint('posts', ['pictureId'], {
      type: 'foreign key',
      references: {
        table: 'photos',
        field: 'id'
      },
      name: 'fk_pictureId'
    })

    //comments
    await queryInterface.addConstraint('comments', ['postId'], {
      type: 'foreign key',
      references: {
        table: 'posts',
        field: 'id'
      },
      name: 'fk_comment_post'
    })
    await queryInterface.addConstraint('comments', ['userId'], {
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'id'
      },
      name: 'fk_comment_user'
    })

    return queryInterface.addConstraint('photos', ['userId'], {
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'id'
      },
      name: 'fk_photos_user'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.removeConstraint('posts', 'fk_post_user')
    await queryInterface.removeConstraint('posts', 'fk_pictureId')

    //comments
    await queryInterface.removeConstraint('comments', 'fk_comment_post')
    await queryInterface.removeConstraint('comments', 'fk_comment_user')

    return queryInterface.removeConstraint('photos', 'fk_photos_user')
  }
}
