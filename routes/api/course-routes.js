const express = require("express");
const router = express.Router();
const { Course, Module } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const courseData = await Course.findAll({
      include: [Module],
    });
    res.status(200).json(courseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
