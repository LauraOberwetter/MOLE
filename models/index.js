const Student = require("./student");
const Login = require("./login");
const Course = require("./course");
const Module = require("./module");
const Activity = require("./activity");

// const db = require("./models");
// db.Student.create;

Student.hasOne(Course, {
  foreignKey: "course_id",
});

Course.hasMany(Module, {
  foreignKey: "module_id",
});

Module.hasMany(Activity, {
  foreignKey: "activity_id",
});

module.exports = { Student, Login, Course, Module, Activity };
