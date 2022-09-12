const express = require("express");
const router = express.router();
router.use("/user", require("./user"));
module.exports = router;
