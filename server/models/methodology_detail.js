'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Methodology_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Methodology_Detail.belongsTo(models.Methodology, {
        foreignKey: "methodology_id"
      })
      Methodology_Detail.hasMany(models.List_of_Asset, {
        foreignKey: "methodology_detail_id",
        sourceKey: 'id'
      })  
    }
  };
  Methodology_Detail.init({
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Activity cannot be empty",
        },
      },
    },
    deliverables: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Deliverable cannot be empty",
        },
      },
    },
    tools: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tools cannot be empty",
        },
      },
    },
    delivered_to: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Delivered To cannot be empty",
        },
      },
    },
    required: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required cannot be empty",
        },
      },
    },
    methodology_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Methodology_Detail',
  });
  return Methodology_Detail;
};