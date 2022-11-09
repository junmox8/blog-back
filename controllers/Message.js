const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const moment = require("moment");
const dayjs = require("dayjs");
const { User, Message, MessageAttach } = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const handUpMessage = async (req, res) => {
  const { content } = req.body;
  const { id: userId } = req.auth;
  const result = await Message.create({
    content,
    userId,
    created_at: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  });
  if (result) returnSuccess(res, "");
  else returnFail(res, "添加留言失败");
};
const getAllMessageNumber = async (req, res) => {
  const result = await Message.findAll();
  returnSuccess(res, result.length);
};
const getOnePageMessage = async (req, res) => {
  const result = await Message.findAll({
    include: [User],
    limit: 5,
    offset: (req.query.page - 1) * 5,
  });
  returnSuccess(res, result);
};
const handUpMessageAttach = async (req, res) => {
  const { content, toUserId, messageId } = req.body;
  const { id: fromUserId } = req.auth;
  const result = await MessageAttach.create({
    content,
    fromUserId,
    toUserId,
    messageId,
  });
  if (result) returnSuccess(res, "");
  else returnFail(res, "回复消息失败");
};
const getTheMessageAttach = async (req, res) => {
  const { id } = req.query;
  const result = await MessageAttach.findAll({
    where: {
      messageId: id,
    },
  });
  if (result) returnSuccess(res, result);
};
const handUpMessageAttachAttach = async (req, res) => {
  const { content, toUserId, messageId } = req.body;
  const { id: fromUserId } = req.auth;
  const result = await MessageAttach.create({
    content,
    fromUserId,
    toUserId,
    messageId,
  });
  if (result) returnSuccess(res, result);
  else returnFail(res, "添加评论失败");
};
const deleteMessage = async (req, res) => {
  const { id } = req.body;
  const result = await Message.destroy({
    where: {
      id,
    },
  });
  if (result) returnSuccess(res, "");
  else returnFail(res, "删除留言失败");
};
const deleteMessageAttach = async (req, res) => {
  const { id } = req.body;
  const result = await MessageAttach.destroy({
    where: {
      id,
    },
  });
  if (result) returnSuccess(res, "");
  else returnFail(res, "删除留言失败");
};
module.exports = {
  handUpMessage,
  getAllMessageNumber,
  getOnePageMessage,
  handUpMessageAttach,
  getTheMessageAttach,
  handUpMessageAttachAttach,
  deleteMessage,
  deleteMessageAttach,
};
