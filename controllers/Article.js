const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const { Article, User, Categorie } = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const handUpArticle = async (req, res) => {
  const { content, title, introduction, categories, tags, img } = req.body;
  const result = await Article.create({
    title,
    content,
    introduction,
    tags,
    userId: req.auth.id,
    img,
  });
  if (result) {
    result.setCategories(categories.split(","));
    returnSuccess(res, "");
  } else returnFail(res, "上传失败");
};
const getAllArticleNumber = async (req, res) => {
  const result = await Article.findAll({});
  if (result) returnSuccess(res, result.length);
};
const getArticleList = async (req, res) => {
  const { limit } = req.query;
  const result = await Article.findAll({
    include: [User, Categorie],
    limit: Number(limit),
    offset: (req.query.page - 1) * Number(limit),
  });
  if (result) returnSuccess(res, result);
};
const getRecentArticle = async (req, res) => {
  const result = await Article.findAll({
    limit: 4,
    order: [["createdAt", "DESC"]],
  });
  if (result) returnSuccess(res, result);
};
const getArticleById = async (req, res) => {
  const result = await Article.findOne({
    where: {
      id: req.query.id,
    },
    include: [Categorie, User],
  });
  if (result) returnSuccess(res, result);
};
const addPageViews = async (req, res) => {
  const { articleId } = req.body;
  const { look } = await Article.findOne({
    where: {
      id: articleId,
    },
  });
  const result = await Article.update(
    {
      look: look + 1,
    },
    {
      where: {
        id: articleId,
      },
    }
  );
  if (result) returnSuccess(res, "");
  else returnFail(res, "增加浏览量失败");
};
module.exports = {
  handUpArticle,
  getAllArticleNumber,
  getArticleList,
  getRecentArticle,
  getArticleById,
  addPageViews,
};
