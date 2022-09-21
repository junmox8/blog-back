const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const ArticleComment = sequelize.define(
  "ArticleComment",
  {
    content: {
      type: DataTypes.STRING(64),
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

module.exports = ArticleComment;
