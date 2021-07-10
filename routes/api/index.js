const express = require("express");
const router = express.Router();
const languageRoutes = require("./language-routes");
const courseRoutes = require("./course-routes");
const moduleRoutes = require("./module-routes");
const activityRoutes = require("./activity-routes");

router.use("/languages", languageRoutes);
// router.use("/courses", courseRoutes);
// router.use("/modules", moduleRoutes);
// router.use("/activities", activityRoutes);

module.exports = router;
