const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurant.controller');

router.post('/new', RestaurantController.addNew);

module.exports = router;
