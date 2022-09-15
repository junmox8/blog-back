const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const { User } = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const login = async (req, res) => {
  const result = await User.findAll({
    username: req.query.username,
    password: req.query.password,
  });
  if (result) returnSuccess(res, result);
};
module.exports = {
  login,
};
