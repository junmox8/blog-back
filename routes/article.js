const express = require("express");
const router = express.Router();
const { Article } = require("../controllers/index");
router.post("/handUpArticle", (req, res) => {
  Article.handUpArticle(req, res);
});
router.get("/getAllArticleNumber", (req, res) => {
  Article.getAllArticleNumber(req, res);
});
router.get("/getArticleList", (req, res) => {
  Article.getArticleList(req, res);
});
module.exports = router;
