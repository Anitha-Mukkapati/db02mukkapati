/*
var express = require("express");
var router = express.Router();

/* GET home page. 
router.get("/", function (req, res, next) {
  res.render("starbucks", { title: "Search Results starbucks" });
});

module.exports = router;
*/

var express = require('express');
const starbucks_controlers= require('../controllers/starbucks');
var router = express.Router();
/* GET starbucks */
router.get('/', starbucks_controlers.starbucks_view_all_Page );
module.exports = router;