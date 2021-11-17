var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var starbucks_controller = require('../controllers/starbucks');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// starbucks ROUTES ///
// POST request for creating a starbucks.
router.post('/resource/starbucks', starbucks_controller.starbucks_create_post);
// DELETE request to delete starbucks.
router.delete('/resource/starbucks/:id', starbucks_controller.starbucks_delete);
// PUT request to update starbucks.
router.put('/resource/starbucks/:id', starbucks_controller.starbucks_update_put);
// GET request for one starbucks.
router.get('/resource/starbucks/:id', starbucks_controller.starbucks_detail);
// GET request for list of all starbucks items.
router.get('/resource/starbucks', starbucks_controller.starbucks_list);
module.exports = router;