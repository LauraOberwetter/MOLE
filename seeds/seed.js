const sequelize = require("../config/connection");
const { Language, Course, Module, Activity } = require("../models");

const languageSeedData = require("./languageSeedData.json");
const courseSeedData = require("./courseSeedData.json");
const moduleSeedData = require("./moduleSeedData.json");
const activitySeedData = require("./activitySeedData.json");

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
