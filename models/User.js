const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/index");

const Admin = sequelize.define(
  "Admin",
  {
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    // MD5存储
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: true,
    updatedAt: false,
    paranoid: true,
  }
);

module.exports = Admin;
