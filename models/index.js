const User = require("./User");
const Article = require("./Article");
const Categorie = require("./Categorie");
const ArticleComment = require("./ArticleComment");
const ArticleCommentAttach = require("./ArticleCommentAttach");
const Message = require("./Message");
const MessageAttach = require("./MessageAttach");
const ImgKind = require("./ImgKind");
const Img = require("./Img");
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
//以上代码是文章评论
//以下代码是留言评论
User.hasMany(Message, {
  foreignKey: "userId",
});
Message.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(MessageAttach, {
  foreignKey: "fromUserId",
});
MessageAttach.belongsTo(User, {
  foreignKey: "fromUserId",
});
User.hasMany(MessageAttach, {
  foreignKey: "toUserId",
});
MessageAttach.belongsTo(User, {
  foreignKey: "toUserId",
});
Message.hasMany(MessageAttach, {
  foreignKey: "messageId",
});
MessageAttach.belongsTo(Message, {
  foreignKey: "messageId",
});
User.hasMany(ImgKind, {
  foreignKey: "userId",
});
ImgKind.belongsTo(User, {
  foreignKey: "userId",
});
ImgKind.hasMany(Img, {
  foreignKey: "kindId",
});
Img.belongsTo(ImgKind, {
  foreignKey: "kindId",
});
module.exports = {
  User,
  Article,
  Categorie,
  ArticleComment,
  ArticleCommentAttach,
  ImgKind,
  Img,
  Message,
  MessageAttach,
};
