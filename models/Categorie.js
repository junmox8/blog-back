const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/mysql_sequelize");
const Categorie = sequelize.define(
  "Categorie",
  {
    name: {
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

module.exports = Categorie;
