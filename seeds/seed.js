const sequelize = require("../config/connection");
const { Language, Course, Module, Activity } = require("../models");

// const studentSeedData = require("./studentSeedData.json");
const languageSeedData = require("./languageSeedData.json");
const courseSeedData = require("./courseSeedData.json");
const moduleSeedData = require("./moduleSeedData.json");
const activitySeedData = require("./activitySeedData.json");

// const seedStudents = () => Student.bulkCreate(studentSeedData);
const seedLanguages = () => Language.bulkCreate(languageSeedData);
const seedCourses = () => Course.bulkCreate(courseSeedData);
const seedModules = () => Module.bulkCreate(moduleSeedData);
const seedActivities = () => Activity.bulkCreate(activitySeedData);

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedLanguages();
  console.log("\n----- LANGUAGES SEEDED -----\n");

  await seedCourses();
  console.log("\n----- COURSES SEEDED -----\n");

  await seedModules();
  console.log("\n----- MODULES SEEDED -----\n");

  await seedActivities();
  console.log("\n----- ACTIVITIES SEEDED -----\n");

  process.exit(0);
};

seedAll();

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const students = await Student.bulkCreate(studentSeedData);

//   const modules = await Module.bulkCreate(moduleSeedData);

//   process.exit(0);
// };

// seedDatabase();

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log("\n----- DATABASE SYNCED -----\n");

//   await seedGrades();
//   console.log("\n----- GRADES SEEDED -----\n");

//   await seedStudents();
//   console.log("\n----- STUDENTS SEEDED -----\n");

//   await seedModules();
//   console.log("\n----- MODULES SEEDED -----\n");

//   process.exit(0);
// };

// seedAll();
