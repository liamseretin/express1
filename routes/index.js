const express = require("express");
const router = express.Router();
const {checkoutCookie}= require("..//services/auth.js");
// GET /
router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/protected", function(req, res, next) {
  res.send("done");
});

module.exports = router;
