'use strict';
module.exports = (sequelize, DataTypes) => {
  const photos = sequelize.define('photos', {
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  photos.associate = function(models) {
    // associations can be defined here
    photos.belongsTo(models.user, {
      foreignKey: 'userId'
    })
    photos.belongsToMany(models.post, {
      through: 'postPicture',
      foreignKey: 'photoId'
    })
  };
  return photos;
};