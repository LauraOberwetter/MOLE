const express = require("express");
const router = express.Router();
const userRoutes = require("./user-routes");
const trialRoutes = require("./trial-routes");

router.use("/users", userRoutes);
router.use("/trials", trialRoutes);

module.exports = router;
