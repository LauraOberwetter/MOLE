const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "language",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "course",
  }
);

module.exports = Course;
