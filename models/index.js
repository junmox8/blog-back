const User = require("./User");
const Article = require("./Article");
const Tag = require("./Tag");
Article.belongsToMany(Tag, {
  through: "Article_Tag",
});
Tag.belongsToMany(Article, {
  through: "Article_Tag",
});
module.exports = {
  User,
  Article,
  Tag,
};
