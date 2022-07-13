const express = require("express");

const router = express.Router();
const userRoute = require("./userRoute");
const { basicAuth } = require('../../../middlewares/auth')

router.use("/user", basicAuth(), userRoute);

module.exports = router;
