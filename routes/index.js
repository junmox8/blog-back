const express = require("express");
const router = express.Router();
router.use("/article", require("./article"));
router.use("/user", require("./user"));
router.use("/upload", require("./cos"));
router.use("/init", require("./dev"));
router.use("/articleComment", require("./articleComment"));
module.exports = router;
