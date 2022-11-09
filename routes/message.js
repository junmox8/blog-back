const express = require("express");
const router = express.Router();
const { Message } = require("../controllers/index");
router.post("/handUpMessage", (req, res) => {
  Message.handUpMessage(req, res);
});
router.get("/getAllMessageNumber", (req, res) => {
  Message.getAllMessageNumber(req, res);
});
router.get("/getOnePageMessage", (req, res) => {
  Message.getOnePageMessage(req, res);
});
router.post("/handUpMessageAttach", (req, res) => {
  Message.handUpMessageAttach(req, res);
});
router.get("/getTheMessageAttach", (req, res) => {
  Message.getTheMessageAttach(req, res);
});
router.post("/handUpMessageAttachAttach", (req, res) => {
  Message.handUpMessageAttachAttach(req, res);
});
router.post("/deleteMessage", (req, res) => {
  Message.deleteMessage(req, res);
});
router.post("/deleteMessageAttach", (req, res) => {
  Message.deleteMessageAttach(req, res);
});
module.exports = router;
