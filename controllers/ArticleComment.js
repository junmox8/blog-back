const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const {
  Article,
  User,
  ArticleComment,
  ArticleCommentAttach,
} = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const handUpComment = async (req, res) => {
  const result = await ArticleComment.create({
    content: req.body.content,
    userId: req.auth.id,
    articleId: req.body.articleId,
  });
  if (result) returnSuccess(res, result);
  else returnFail(res, "发布评论失败");
};
module.exports = {
  handUpComment,
};
