'use strict';
module.exports = (sequelize, DataTypes) => {
  var fav = sequelize.define('fav', {
    name: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    address: DataTypes.TEXT,
    locality: DataTypes.STRING,
    menu: DataTypes.STRING,
    resId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  fav.associate = function(models) {
    models.fav.belongsTo(models.user); //this connects to user table 
  };
  return fav;
};