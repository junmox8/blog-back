const express = require("express");
const router = express.Router();
const { User } = require("../controllers/index");
router.post("/login", (req, res) => {
  User.login(req, res);
});
router.post("/register", (req, res) => {
  User.register(req, res);
});
router.get("/getUserInfo", (req, res) => {
  User.getUserInfo(req, res);
});
router.get("/getMyUserInfo", (req, res) => {
  User.getMyUserInfo(req, res);
});
router.post("/updateUserInfo", (req, res) => {
  User.updateUserInfo(req, res);
});
module.exports = router;
