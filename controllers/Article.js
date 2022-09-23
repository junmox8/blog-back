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
    createdAt: moment(new Date())
      .utcOffset(+16)
      .format("YYYY-MM-DD HH:mm:ss"),
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
  const result = await Article.findAll({
    include: [User, Categorie],
    limit: 3,
    offset: (req.query.page - 1) * 3,
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
module.exports = {
  handUpArticle,
  getAllArticleNumber,
  getArticleList,
  getRecentArticle,
  getArticleById,
};
