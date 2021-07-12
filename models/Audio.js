const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Audio extends Model {}

Audio.init(
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
    audio_file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choice_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "choice",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "audio",
  }
);

module.exports = Audio;
