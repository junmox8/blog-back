const express = require("express");
const app = express();
const router = require("./routes/index");
require("express-async-errors");
const { returnFail, returnSuccess } = require("./utils/http");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const jwtAuthMiddleware = require("./middleWare/expressJWT");
app.use(jwtAuthMiddleware);
app.use("/api", router);
app.use(function (err, req, res, next) {
  if (err.code === "credentials_required") {
    returnFail(res, "请先登录");
  } else if (err.code === "invalid_token") {
    returnFail(res, "请重新登录");
  } else {
    returnFail(res, "服务器错误");
  }
});
app.listen(3000, () => {
  console.log("连接已建立");
});
module.exports = app;
