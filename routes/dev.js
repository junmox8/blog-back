const express = require("express");
const router = express.Router();
const { init } = require("../controllers/dev");
router.post("/initData", async (req, res) => {
  await init();
});
module.exports = router;
