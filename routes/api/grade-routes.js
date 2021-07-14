const express = require("express");
const router = express.Router();
const { Grade, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const gradeData = await Grade.findAll({
      include: [User],
    });
    res.status(200).json(gradeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
