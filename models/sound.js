const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sound extends Model {}

Sound.init(
  {
    sound_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    speaker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sound_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sound",
  }
);

sound.exports = Sound;
