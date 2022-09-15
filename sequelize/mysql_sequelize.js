const { Sequelize } = require("sequelize");
const sqlConfig = require("../json/db");
const sequelize = new Sequelize(
  sqlConfig.database,
  sqlConfig.user,
  sqlConfig.password,
  {
    host: sqlConfig.host,
    dialect: "mysql",
    timezone: "+08:00",
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
// sequelize
//   .sync()
//   .then(() => {
//     console.log("init db ok");
//   })
//   .catch((err) => {
//     console.log("init db error", err);
//   });
module.exports = sequelize;
