var express = require('express');
const starbucks_controlers= require('../controllers/starbucks');
var router = express.Router();
/* GET starbucks */
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
router.get('/', starbucks_controlers.starbucks_view_all_Page );
/* GET detail starbucks page */
router.get('/detail', starbucks_controlers.starbucks_view_one_Page);
/* GET create starbucks page */
router.get('/create',secured, starbucks_controlers.starbucks_create_Page);
/* GET create update page */
router.get('/update',secured, starbucks_controlers.starbucks_update_Page);
/* GET create starbucks page */
router.get('/delete',secured, starbucks_controlers.starbucks_delete_Page);


module.exports = router;
