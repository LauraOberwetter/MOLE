const express = require("express");
const router = express.Router();
const { Language, Course } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const languageData = await Language.findAll({
      include: [Course],
    });
    res.status(200).json(languageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
