'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List_of_Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      List_of_Asset.belongsTo(models.Methodology_Detail, { 
        foreignKey: 'methodology_detail_id'
      })
      List_of_Asset.belongsTo(models.Asset, { 
        foreignKey: 'asset_id'
      })
    }
  };
  List_of_Asset.init({
    methodology_detail_id: DataTypes.INTEGER,
    asset_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'List_of_Asset',
  });
  return List_of_Asset;
};