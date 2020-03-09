const bcrypt = require('bcrypt-nodejs');

function hashPassword(user) {
    const SALT_FACTOR = 8;
  
    if (!user.changed('password')) {
      return null;
    }
  
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then((salt) => bcrypt.hashAsync(user.password, salt, null))
        .then((hash) => {
            user.setDataValue('password', hash);
        });
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
          type: DataTypes.STRING,
          unique: true,
        },
        password: DataTypes.STRING,
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword,
        },
    });
    
    User.prototype.comparePassword = function comparePassword(password) {
        return bcrypt.compareAsync(password, this.password);
    };
    
    return User;
};
