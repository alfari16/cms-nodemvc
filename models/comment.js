'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.post, {
      foreignKey: 'postId'
    })
    comment.belongsTo(models.user, {
      foreignKey: 'userId'
    })
  };
  return comment;
};