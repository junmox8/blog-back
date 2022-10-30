const { Op } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const { User, Img, ImgKind } = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const handUpImgKind = async (req, res) => {
  const { id } = req.auth;
  const { name } = req.body;
  if (name.length == 0) returnFail(res, "请填写分类名");
  else {
    const r = await ImgKind.findOne({
      where: {
        name,
        userId: id,
      },
    });
    if (r) returnFail(res, "此分类已存在");
    else {
      const result = await ImgKind.create({
        name,
        userId: id,
      });
      if (result) returnSuccess(res, result);
      else returnFail(res, "增加图片分类失败");
    }
  }
};
const getAllImgKinds = async (req, res) => {
  const result = await ImgKind.findAll({
    where: {
      userId: req.auth.id,
    },
  });
  if (result) returnSuccess(res, result);
};
const handUpImg = async (req, res) => {
  const { kindName, urls } = req.body;
  const result = await ImgKind.findOne({
    where: {
      name: kindName,
    },
  });
  let kindId = result.id;
  const result2 = await Img.findOne({
    where: {
      kindId,
    },
  });
  if (result2) {
    const result3 = await Img.update(
      {
        url: urls,
      },
      {
        where: {
          kindId,
        },
      }
    );
    if (result3) returnSuccess(res, result3);
    else returnFail(res, "上传图片失败");
  } else {
    const result3 = await Img.create({
      url: urls,
      kindId,
    });
    if (result3) returnSuccess(res, result3);
    else returnFail(res, "上传图片失败");
  }
};
const getImgs = async (req, res) => {
  const { id } = req.auth;
  const { kindName } = req.query;
  const result = await ImgKind.findOne({
    where: {
      name: kindName,
      userId: id,
    },
  });
  let kindId = result.id;
  const result2 = await Img.findAll({
    where: {
      kindId,
    },
  });
  if (result2) returnSuccess(res, result2);
};
module.exports = {
  handUpImgKind,
  getAllImgKinds,
  handUpImg,
  getImgs,
};
