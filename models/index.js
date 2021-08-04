const User = require("./User");
const Trial = require("./Trial");

User.hasMany(Trial, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Trial.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Trial,
};
