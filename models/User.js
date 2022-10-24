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
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true,
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
