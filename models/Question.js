const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Question extends Model {}

Question.init(
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
    choice1_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choice2_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correctChoice_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "activity",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "question",
  }
);

module.exports = Question;
