const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const { User } = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const { sign } = require("../utils/jwt");
const login = async (req, res) => {
  const result = await User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (result)
    returnSuccess(res, {
      ...result,
      token: sign({
        id: result.id,
      }),
    });
  else returnFail(res, "用户名或密码错误");
};
const register = async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (user) returnFail(res, "该用户名已被注册,请更换");
  else {
    const result = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    if (result) returnSuccess(res, result);
    else returnFail(res, "");
  }
};
module.exports = {
  login,
  register,
};
