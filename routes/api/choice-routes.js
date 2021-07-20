const express = require("express");
const router = express.Router();
const { Choice, Audio } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const choiceData = await Choice.findAll({
      include: [Audio],
    });
    res.status(200).json(choiceData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
