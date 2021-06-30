const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Grade extends Model {}

Grade.init(
  {
    grade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    grade: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        isDecimal: true,
      },
    },
    module_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "module",
        key: "module_id",
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "student",
          key: "student_id",
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "contrast",
  }
);

module.exports = Grade;
