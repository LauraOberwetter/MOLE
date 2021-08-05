const sequelize = require("../config/connection");
const { User } = require("../models");

const userSeedData = require("./userSeedData.json");

const seedUser = () => User.bulkCreate(userSeedData, { individualHooks: true });

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
