var express = require('express');
const starbucks_controlers= require('../controllers/starbucks');
var router = express.Router();
/* GET starbucks */
router.get('/', starbucks_controlers.starbucks_view_all_Page );
/* GET detail starbucks page */
router.get('/detail', starbucks_controlers.starbucks_view_one_Page);
/* GET create starbucks page */
router.get('/create', starbucks_controlers.starbucks_create_Page);
/* GET create update page */
router.get('/update', starbucks_controlers.starbucks_update_Page);
/* GET create starbucks page */
router.get('/delete', starbucks_controlers.starbucks_delete_Page);


module.exports = router;
