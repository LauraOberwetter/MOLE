const express = require("express");
const router = express.Router();
const { Audio } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const audioData = await Audio.findAll({});
    res.status(200).json(audioData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

