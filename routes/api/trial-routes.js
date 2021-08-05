const express = require("express");
const router = express.Router();
const { Trial } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const trialData = await Trial.findAll({});
    res.status(200).json(trialData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
