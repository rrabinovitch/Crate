// user attributes
  // name
  // email
  // password
  // role
    // ---doesnt seem to specify which role types there are, but based on seeded data there is ADMIN & USER---
    // maybe scratch that^ ? see 'code/api/src/config/params.json' for where i think the role types are defined

'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
