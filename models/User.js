const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue:
        "http://pic.soutu123.cn/element_origin_min_pic/01/54/05/625746fd5b60878.jpg!/fw/700/quality/90/unsharp/true/compress/true",
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: "未命名",
    },
    introduction: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
  },
  {
    underscored: true,
    timestamps: true,
    updatedAt: false,
    paranoid: true,
  }
);

module.exports = User;
