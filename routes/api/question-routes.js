const express = require("express");
const router = express.Router();
const { Question, Choice } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const questionData = await Question.findAll({
      include: [Choice],
    });
    res.status(200).json(questionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
