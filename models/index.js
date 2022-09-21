const User = require("./User");
const Article = require("./Article");
const Categorie = require("./Categorie");
const ArticleComment = require("./ArticleComment");
const ArticleCommentAttach = require("./ArticleCommentAttach");
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
User.hasMany(ArticleComment, {
  foreignKey: "userId",
});
ArticleComment.belongsTo(User, {
  foreignKey: "userId",
});
ArticleComment.hasMany(ArticleCommentAttach, {
  foreignKey: "commentId",
});
ArticleCommentAttach.belongsTo(ArticleComment, {
  foreignKey: "commentId",
});
module.exports = {
  User,
  Article,
  Categorie,
  ArticleComment,
  ArticleCommentAttach,
};
