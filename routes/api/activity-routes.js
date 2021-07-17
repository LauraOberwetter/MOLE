const express = require("express");
const router = express.Router();
const { Activity, Question, Choice, Audio } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      include: [Question],
    });
    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get activity & questions for a single activity id
router.get("/:id", async (req, res) => {
  try {
    const activityData = await Activity.findByPk(req.params.id, {
      include: [{
        model: Question, 
        include: [{
          model: Choice,
          include: [Audio]
        }]
      }],
    });
    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;