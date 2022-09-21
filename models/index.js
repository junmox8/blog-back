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
Article.hasMany(ArticleComment, {
  foreignKey: "articleId",
});
ArticleComment.belongsTo(Article, {
  foreignKey: "articleId",
});
User.hasMany(ArticleComment, {
  foreignKey: "userId",
});
ArticleComment.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(ArticleCommentAttach, {
  foreignKey: "fromUserId",
});
ArticleCommentAttach.belongsTo(User, {
  foreignKey: "fromUserId",
});
User.hasMany(ArticleCommentAttach, {
  foreignKey: "toUserId",
});
ArticleCommentAttach.belongsTo(User, {
  foreignKey: "toUserId",
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
