const { Student } = require("../models");

const studentData = [
  {
    first_name: "Nathan",
    last_name: "Huguley",
    email: "nathan.huguley@school.edu",
  },
  {
    first_name: "Robert",
    last_name: "Smith",
    email: "robert.smith@school.edu",
  },
  {
    first_name: "Ellen",
    last_name: "Wilder",
    email: "ellen.wilder@school.edu",
  },
  {
    first_name: "Sally",
    last_name: "Johnson",
    email: "sally.johnson@school.edu",
  },
  {
    first_name: "Margaret",
    last_name: "Kovacs",
    email: "margaretkovacs@school.edu",
  },
];

const seedStudents = () => Category.bulkCreate(studentData);

module.exports = seedStudents;