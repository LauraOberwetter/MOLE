const express = require("express");
const router = express.Router();
const { User, Course } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [Course],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
