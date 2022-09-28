const express = require("express");
const router = express.Router();
const { Album } = require("../controllers/index");
router.post("/handUpImgKind", (req, res) => {
  Album.handUpImgKind(req, res);
});
router.get("/getAllImgKinds", (req, res) => {
  Album.getAllImgKinds(req, res);
});
router.post("/handUpImg", (req, res) => {
  Album.handUpImg(req, res);
});
router.get("/getImgs", (req, res) => {
  Album.getImgs(req, res);
});
module.exports = router;
