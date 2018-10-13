'use strict';
module.exports = (sequelize, DataTypes) => {
  const postPicture = sequelize.define('postPicture', {
    postId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {});
  postPicture.associate = function(models) {
    // associations can be defined here
  };
  return postPicture;
};