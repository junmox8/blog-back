const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const Img = sequelize.define(
  "Img",
  {
    url: {
      type: DataTypes.STRING(4096),
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

module.exports = Img;
