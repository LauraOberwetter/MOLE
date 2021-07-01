const { Module } = require("../models");

const moduleData = [
  {
    module_name: "Japanese 1",
    due_date: 7 / 5 / 2021,
    status: "In Progress",
  },
  {
    module_name: "Japanese 2",
    due_date: 7 / 15 / 2021,
    status: "Not Started",
  },
  {
    module_name: "Japanese 3",
    due_date: 7 / 30 / 2021,
    status: "In Progress",
  },
  {
    module_name: "Japanese 4",
    due_datee: 7 / 20 / 2021,
    status: "Not Started",
  },
  {
    module_name: "Japanese 5",
    due_date: 6 / 30 / 2021,
    status: "Completed",
  },
];

const seedModules = () => Category.bulkCreate(moduleData);

module.exports = seedModules;
