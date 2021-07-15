const express = require("express");
const router = express.Router();
const languageRoutes = require("./language-routes");
const courseRoutes = require("./course-routes");
const moduleRoutes = require("./module-routes");
const activityRoutes = require("./activity-routes");
const questionRoutes = require("./question-routes");
const choiceRoutes = require("./choice-routes");
const audioRoutes = require("./audio-routes");
const userRoutes = require("./user-routes");
const gradeRoutes = require("./grade-routes");

router.use("/languages", languageRoutes);
router.use("/courses", courseRoutes);
router.use("/modules", moduleRoutes);
router.use("/activities", activityRoutes);
router.use("/questions", questionRoutes);
router.use("/choices", choiceRoutes);
router.use("/audio", audioRoutes);
router.use("/users", userRoutes);
router.use("/grades", gradeRoutes);

module.exports = router;
