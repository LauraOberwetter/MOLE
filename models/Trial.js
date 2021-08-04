const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trial extends Model {}

Trial.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    responses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trial_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    session: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    success: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sound: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speaker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key_press: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct_response: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    button_pressed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stimulus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trial_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time_elapsed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trial_part: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    times_taken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    internal_node_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "trial",
  }
);

module.exports = Trial;
