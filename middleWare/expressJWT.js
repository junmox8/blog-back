const { expressjwt: jwt } = require("express-jwt");
const { key: secretKey } = require("../json/secretKey.json");

const jwtAuth = jwt({
  secret: secretKey,
  algorithms: ["HS256"],
  requestProperty: "auth",
}).unless({
  path: ["/api/user/login", "/api/init/initData"],
});

module.exports = jwtAuth;
