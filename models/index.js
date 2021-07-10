const Language = require("./Language");
const Course = require("./Course");
const User = require("./User");
const Module = require("./Module");
const Activity = require("./Activity");
const Sound = require("./Sound");
const Grade = require("./Grade");

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

User.hasMany(Grade, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Grade.belongsTo(User, {
  foreignKey: "user_id",
});

Activity.hasMany(Sound, {
  foreignKey: "activity_id",
  onDelete: "CASCADE",
});

Sound.belongsTo(Activity, {
  foreignKey: "activity_id",
});

module.exports = { Language, Course, User, Module, Activity, Sound, Grade };
