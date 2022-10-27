const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const Article = sequelize.define(
  "Article",
  {
    img: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    introduction: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    like: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    comment: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    look: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
    },
    content: {
      type: DataTypes.STRING(10000),
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    categories: {
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

module.exports = Article;
