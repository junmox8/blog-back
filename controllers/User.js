const { Op } = require("sequelize");
const sequelize = require("../sequelize/index");
const { User } = require("../models/index");
const { returnSuccess, returnFail } = require("../utils/http");
const login = async (req, res) => {
  returnSuccess(res, 11);
};
module.exports = {
  login,
};
