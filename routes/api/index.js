const router = require("express").Router();
const articleRoutes = require("./articles");

// Book routes
router.use("/saved", articleRoutes);

module.exports = router;
