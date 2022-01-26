const express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
  res.send({ programa: "Auth Basic" });
});

module.exports = router;
