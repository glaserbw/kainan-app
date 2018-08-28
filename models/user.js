'use strict';
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Hey! Give me a valid email, loser.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 16],
          msg: 'Your password should be between 8 & 16 character. Try AGAIN!'
        }
      }
    },
    dob: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    facebookId: DataTypes.STRING,
    facebookToken: DataTypes.STRING, 
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'No pic - you were ugly anyway'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(pendingUser){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash; 
        }
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
  };

  user.prototype.isValidPassword = function(typedPassword){
    return bcrypt.compareSync(typedPassword, this.password);
  }

  return user;
};



















