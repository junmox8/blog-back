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
      avatar:
        "http://huangjunyi-1310688513.cos.ap-shanghai.myqcloud.com/articleCover/1666310822726",
      name: "未命名",
      introduction: "",
    });
    await User.update(
      {
        name: "未命名" + result.id,
      },
      {
        where: {
          id: result.id,
        },
      }
    );
    if (result) returnSuccess(res, result);
    else returnFail(res, "登陆失败");
  }
};
const getUserInfo = async (req, res) => {
  const result = await User.findOne({
    where: {
      id: req.query.id,
    },
    attributes: ["name", "avatar"],
  });
  if (result) returnSuccess(res, result);
};
const getMyUserInfo = async (req, res) => {
  const result = await User.findOne({
    where: {
      id: req.auth.id,
    },
    attributes: ["name", "avatar", "introduction"],
  });
  if (result) returnSuccess(res, result);
};
const updateUserInfo = async (req, res) => {
  const { name, avatar, introduction } = req.body;
  const result = await User.update(
    {
      name,
      avatar,
      introduction,
    },
    {
      where: {
        id: req.auth.id,
      },
    }
  );
  if (result) returnSuccess(res, result);
  else returnFail(res, "更新失败");
};
module.exports = {
  login,
  register,
  getUserInfo,
  getMyUserInfo,
  updateUserInfo,
};
