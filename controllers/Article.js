const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const { Article, User, Categorie, LikeLog } = require("../models/index");
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
const likeOrNot = async (req, res) => {
  const { id } = req.auth;
  const { articleId } = req.body;
  const user = await User.findOne({ where: { id } });
  const log = await LikeLog.findOne({
    articleId,
    userId: id,
  });
  const lik = await Article.findOne({
    where: {
      id: articleId,
    },
    attributes: ["like"],
  });
  const like = lik.dataValues.like;
  if (!log) {
    const result = await LikeLog.create({
      articleId,
      userId: id,
    });
    if (result) {
      await Article.update(
        {
          like: like + 1,
        },
        {
          where: {
            id: articleId,
          },
        }
      );
      returnSuccess(res, "star成功");
    } else returnFail(res, "star失败");
  } else {
    const result = await LikeLog.destroy({
      where: {
        articleId,
        userId: id,
      },
    });
    if (result) {
      await Article.update(
        {
          like: like - 1,
        },
        {
          where: {
            id: articleId,
          },
        }
      );
      returnSuccess(res, "取消star成功");
    } else returnFail(res, "取消star失败");
  }
};
const hasLike = async (req, res) => {
  const { articleId } = req.query;
  const { id } = req.auth;
  const result = await LikeLog.findOne({
    where: {
      articleId,
      userId: id,
    },
  });
  if (result) returnSuccess(res, 1);
  else returnSuccess(res, 0);
};
const searchArticle = async (req, res) => {
  const { word, page } = req.query;
  const result = await Article.findAll({
    where: {
      title: {
        [Op.like]: "%" + word + "%",
      },
    },
    offset: (page - 1) * 12,
    include: [User, Categorie],
  });
  returnSuccess(res, result);
};
module.exports = {
  handUpArticle,
  getAllArticleNumber,
  getArticleList,
  getRecentArticle,
  getArticleById,
  addPageViews,
  likeOrNot,
  hasLike,
  searchArticle,
};
