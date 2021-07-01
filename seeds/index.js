const seedGrades = require("./grade-seeds");
const seedStudents = require("./student-seeds");
const seedModules = require("./module-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedGrades();
  console.log("\n----- GRADES SEEDED -----\n");

  await seedStudents();
  console.log("\n----- STUDENTS SEEDED -----\n");

  await seedModules();
  console.log("\n----- MODULES SEEDED -----\n");

  process.exit(0);
};

seedAll();
