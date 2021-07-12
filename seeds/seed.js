const sequelize = require("../config/connection");
const {
  Language,
  Course,
  Module,
  Activity,
  Question,
  Choice,
  Audio,
} = require("../models");

const languageSeedData = require("./languageSeedData.json");
const courseSeedData = require("./courseSeedData.json");
const moduleSeedData = require("./moduleSeedData.json");
const activitySeedData = require("./activitySeedData.json");
const questionSeedData = require("./questionSeedData.json");
const choiceSeedData = require("./choiceSeedData.json");
const audioSeedData = require("./audioSeedData.json");

const seedLanguages = () => Language.bulkCreate(languageSeedData);
const seedCourses = () => Course.bulkCreate(courseSeedData);
const seedModules = () => Module.bulkCreate(moduleSeedData);
const seedActivities = () => Activity.bulkCreate(activitySeedData);
const seedQuestions = () => Question.bulkCreate(questionSeedData);
const seedChoices = () => Choice.bulkCreate(choiceSeedData);
const seedAudio = () => Audio.bulkCreate(audioSeedData);

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

  await seedQuestions();
  console.log("\n----- QUESTIONS SEEDED -----\n");

  await seedChoices();
  console.log("\n----- CHOICES SEEDED -----\n");

  await seedAudio();
  console.log("\n----- AUDIO SEEDED -----\n");

  process.exit(0);
};

seedAll();
