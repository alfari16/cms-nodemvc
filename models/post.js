'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    pictureId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    post.belongsTo(models.user, {
      foreignKey: 'userId'
    })
    post.hasOne(models.photos, {
      foreignKey: 'pictureId'
    })
    post.belongsToMany(models.photos, {
      through: 'postPicture',
      foreignKey: 'postId'
    })
    post.hasMany(models.comment, {
      foreignKey: 'postId'
    })
  };
  return post;
};