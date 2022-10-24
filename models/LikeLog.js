const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const LikeLog = sequelize.define(
  "LikeLog",
  {},
  {
    underscored: true,
    timestamps: true,
    updatedAt: false,
    paranoid: true,
  }
);

module.exports = LikeLog;
