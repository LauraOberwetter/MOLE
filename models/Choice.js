const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Choice extends Model {}

Choice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    legacy_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roman_label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    japanese_label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "question",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "choice",
  }
);

module.exports = Choice;
