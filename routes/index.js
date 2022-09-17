const express = require("express");
const router = express.Router();
router.use("/user", require("./user"));
router.use("/upload", require("./cos"));
module.exports = router;
