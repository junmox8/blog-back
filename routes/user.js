const express = require("express");
const router = express.router();
const { User } = require("../controllers/index");
router.post("/login", (req, res) => {
  User.login(req, res);
});
module.exports = router;
