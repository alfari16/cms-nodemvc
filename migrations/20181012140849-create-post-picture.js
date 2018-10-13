'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('postPictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      photoId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.addConstraint('postPictures', ['postId'], {
      type: 'foreign key',
      name: 'fk_picture_post',
      references: {
        table: 'posts',
        field: 'id'
      }
    })
    return queryInterface.addConstraint('postPictures', ['photoId'], {
      type: 'foreign key',
      name: 'fk_picture_photos',
      references: {
        table: 'photos',
        field: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('postPictures', 'fk_picture_post')
    await queryInterface.removeConstraint('postPictures', 'fk_picture_photos')
    return queryInterface.dropTable('postPictures')
  }
}
