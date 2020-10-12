module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
              'users',
              'style',
               Sequelize.STRING
             );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('style');
  }
}
