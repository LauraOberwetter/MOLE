const router = require("express").Router();
const { Student, Grade } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const studentData = await Student.findAll({
      include: [{ model: Grade }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
