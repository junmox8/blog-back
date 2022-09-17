const jwt = require("jsonwebtoken");
const { key: secretKey } = require("../json/secretKey.json");

module.exports = {
  sign(payload) {
    return jwt.sign(payload, secretKey, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
  },
  verify(token) {
    return jwt.verify(token, secretKey);
  },
};
