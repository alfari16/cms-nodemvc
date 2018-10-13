'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pictureId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    user.hasMany(models.post, {
      foreignKey: 'userId'
    })
    user.hasOne(models.photos, {
      foreignKey: 'pictureId'
    })
    user.hasMany(models.comment, {
      foreignKey: 'userId'
    })
  };
  return user;
};