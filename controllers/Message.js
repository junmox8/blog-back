const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const moment = require("moment");
const { User, Message, MessageAttach } = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const handUpMessage = async (req, res) => {
  const { content } = req.body;
  const { id: userId } = req.auth;
  const result = await Message.create({
    content,
    userId,
  });
  if (result) returnSuccess(res, "");
  else returnFail(res, "添加留言失败");
};
module.exports = {
  handUpMessage,
};
