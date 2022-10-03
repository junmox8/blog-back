const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const Message = sequelize.define(
  "Message",
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

module.exports = Message;
