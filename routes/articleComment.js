const express = require("express");
const router = express.Router();
const { ArticleComment } = require("../controllers/index");
router.post("/handUpComment", (req, res) => {
  ArticleComment.handUpComment(req, res);
});
router.get("/getAllContent", (req, res) => {
  ArticleComment.getAllContent(req, res);
});
router.post("/handUpCommentAttach", (req, res) => {
  ArticleComment.handUpCommentAttach(req, res);
});
router.get("/getTheCommentAttach", (req, res) => {
  ArticleComment.getTheCommentAttach(req, res);
});
router.post("/handUpCommentAttachAttach", (req, res) => {
  ArticleComment.handUpCommentAttachAttach(req, res);
});
module.exports = router;
