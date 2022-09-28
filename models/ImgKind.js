const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const ImgKind = sequelize.define(
  "ImgKind",
  {
    name: {
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

module.exports = ImgKind;
