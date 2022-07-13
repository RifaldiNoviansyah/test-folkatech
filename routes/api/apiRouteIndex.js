const express = require("express");
const router = express.Router();

const indexUserRoute = require("./user/indexUserRoute");

router.use("/user", indexUserRoute);

module.exports = router;