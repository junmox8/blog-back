const express = require("express");
const router = express.Router();
const { Message } = require("../controllers/index");
const handUpMessage = (req, res) => {
  Message.handUpMessage(req, res);
};
module.exports = router;
