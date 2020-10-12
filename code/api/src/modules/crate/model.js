// crate attributes
  // name
  // description

'use strict'
// https://www.w3schools.com/js/js_strict.asp
// 'defines that JavaScript code should be executed in "strict mode"'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}
