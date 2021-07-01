const { Sound } = require("../models");

const soundData = [
  {
    sound_id: "Nathan",
    last_name: "Huguley",
    email: "nathan.huguley@school.edu",
  },
];

const seedSounds = () => Category.bulkCreate(soundData);

module.exports = seedSounds;
