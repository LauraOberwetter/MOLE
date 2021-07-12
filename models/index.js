const Language = require("./Language");
const Course = require("./Course");
const User = require("./User");
const Module = require("./Module");
const Activity = require("./Activity");
const Audio = require("./Audio");
const Grade = require("./Grade");
const Question = require("./Question");
const Choice = require("./Choice");

Language.hasMany(Course, {
  foreignKey: "language_id",
  onDelete: "CASCADE",
});

Course.belongsTo(Language, {
  foreignKey: "language_id",
});

Course.hasMany(User, {
  foreignKey: "course_id",
  onDelete: "CASCADE",
});

User.belongsTo(Course, {
  foreignKey: "course_id",
});

Course.hasMany(Module, {
  foreignKey: "course_id",
  onDelete: "CASCADE",
});

Module.belongsTo(Course, {
  foreignKey: "course_id",
});

Module.hasMany(Activity, {
  foreignKey: "module_id",
  onDelete: "CASCADE",
});

Activity.belongsTo(Module, {
  foreignKey: "module_id",
});

Activity.hasMany(Question, {
  foreignKey: "activity_id",
  onDelete: "CASCADE",
});

Question.belongsTo(Activity, {
  foreignKey: "activity_id",
});

Question.hasMany(Choice, {
  foreignKey: "question_id",
  onDelete: "CASCADE",
});

Choice.belongsTo(Question, {
  foreignKey: "question_id",
});

User.hasMany(Grade, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Grade.belongsTo(User, {
  foreignKey: "user_id",
});

Choice.hasMany(Audio, {
  foreignKey: "choice_id",
  onDelete: "CASCADE",
});

Audio.belongsTo(Choice, {
  foreignKey: "choice_id",
});

module.exports = {
  Language,
  Course,
  User,
  Module,
  Activity,
  Audio,
  Grade,
  Choice,
  Question,
};
