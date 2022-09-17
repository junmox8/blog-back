const express = require("express");
const router = express.Router();
const getTempSecret = require("../utils/cos");
router.get("/getTempSecret", (req, res) => {
  getTempSecret(req, res);
});
module.exports = router;
