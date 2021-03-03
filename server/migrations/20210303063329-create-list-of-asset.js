'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('List_of_Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      methodology_detail_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Methodology_Details',
          },
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      asset_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Assets',
          },
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('List_of_Assets');
  }
};