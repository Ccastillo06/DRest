const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurant.controller');
const multer = require('multer');
const upload = multer({ dest: './public/uploads' });

router.get('/all', RestaurantController.getAll);
router.get('/info/:id', RestaurantController.getInfo);
router.post('/new', upload.single('file'), RestaurantController.newRestaurant);

module.exports = router;
