const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Grade extends Model {}

Grade.init(
  {
    id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "grade",
  }
);

module.exports = Grade;
