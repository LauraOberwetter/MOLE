const express = require("express");
const router = express.Router();
const { Module, Activity } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const moduleData = await Module.findAll({
      include: [Activity],
    });
    res.status(200).json(moduleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const moduleData = await Module.findByPk(req.params.id, {
      include: [Activity],
    });
    res.status(200).json(moduleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
