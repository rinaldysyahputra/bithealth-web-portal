'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Methodology_Details', 'methodology_id', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Methodologies',
        },
        key: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Methodology_Details', 'methodology_id', {})
  }
};
