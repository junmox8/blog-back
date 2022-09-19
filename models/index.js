const User = require("./User");
const Article = require("./Article");
const Categorie = require("./Categorie");
Article.belongsToMany(Categorie, {
  through: "Article_Tag",
});
Categorie.belongsToMany(Article, {
  through: "Article_Tag",
});
User.hasMany(Article, {
  foreignKey: "userId",
});
Article.belongsTo(User, {
  foreignKey: "userId",
});
module.exports = {
  User,
  Article,
  Categorie,
};
