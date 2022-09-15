const express = require("express");
const app = express();
const router = require("./routes/index");
require("express-async-errors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", router);
app.listen(3000, () => {
  console.log("连接已建立");
});
module.exports = app;
