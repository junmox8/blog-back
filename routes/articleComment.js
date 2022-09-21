const express = require("express");
const router = express.Router();
const { ArticleComment } = require("../controllers/index");
router.post("/handUpComment", (req, res) => {
  ArticleComment.handUpComment(req, res);
});
module.exports = router;
