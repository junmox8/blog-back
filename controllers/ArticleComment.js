const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const moment = require("moment");
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
  const commen = await Article.findOne({
    where: {
      id: req.body.articleId,
    },
    attributes: ["comment"],
  });
  const comment = commen.dataValues.comment;
  await Article.update(
    {
      comment: comment + 1,
    },
    {
      where: {
        id: req.body.articleId,
      },
    }
  );

  if (result) returnSuccess(res, result);
  else returnFail(res, "发布评论失败");
};
const getAllContent = async (req, res) => {
  const result = await ArticleComment.findAll({
    where: {
      articleId: req.query.id,
    },
    include: [User],
    limit: 5,
    offset: (req.query.page - 1) * 5,
  });
  if (result) returnSuccess(res, result);
};
const handUpCommentAttach = async (req, res) => {
  const { userId, commentId, content } = req.body;
  const { id: fromUserId } = req.auth;
  const result = await ArticleCommentAttach.create({
    content,
    commentId,
    fromUserId,
    toUserId: userId,
  });
  if (result) returnSuccess(res, result);
  else returnFail(res, "添加评论失败");
};
const getTheCommentAttach = async (req, res) => {
  const result = await ArticleCommentAttach.findAll({
    where: {
      commentId: req.query.id,
    },
  });
  if (result) returnSuccess(res, result);
};
const handUpCommentAttachAttach = async (req, res) => {
  const { content, toUserId, commentId } = req.body;
  const { id: fromUserId } = req.auth;
  const result = await ArticleCommentAttach.create({
    content,
    fromUserId,
    toUserId,
    commentId,
  });
  if (result) returnSuccess(res, result);
  else returnFail(res, "添加评论失败");
};
const getCommentNumber = async (req, res) => {
  const result = await ArticleComment.findAll({
    where: {
      articleId: req.query.id,
    },
  });
  if (result) returnSuccess(res, result.length);
};
module.exports = {
  handUpComment,
  getAllContent,
  handUpCommentAttach,
  getTheCommentAttach,
  handUpCommentAttachAttach,
  getCommentNumber,
};
