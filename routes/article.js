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
router.get("/getRecentArticle", (req, res) => {
  Article.getRecentArticle(req, res);
});
router.get("/getArticleById", (req, res) => {
  Article.getArticleById(req, res);
});
router.post("/addPageViews", (req, res) => {
  Article.addPageViews(req, res);
});
router.post("/likeOrNot", (req, res) => {
  Article.likeOrNot(req, res);
});
router.get("/hasLike", (req, res) => {
  Article.hasLike(req, res);
});
router.get("/searchArticle", (req, res) => {
  Article.searchArticle(req, res);
});
router.get("/searchArticleByTag", (req, res) => {
  Article.searchArticleByTag(req, res);
});
module.exports = router;
