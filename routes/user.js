const express = require("express");
const router = express.Router();
const { User } = require("../controllers/index");
router.post("/login", (req, res) => {
  User.login(req, res);
});
router.post("/register", (req, res) => {
  User.register(req, res);
});
module.exports = router;
