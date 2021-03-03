"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Methodology extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Methodology.hasMany(models.Methodology_Detail, {
        foreignKey: "methodology_id",
        sourceKey: 'id' 
      });
    }
  }
  Methodology.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name cannot be empty",
          },
        },
      },
      job_role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Job Role cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Methodology",
    }
  );
  return Methodology;
};
