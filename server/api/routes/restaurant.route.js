const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurant.controller');
const multer = require('multer');
// const upload = multer({ dest: './public/uploads' })
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'DRest',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'my-file-name');
  }
});
var parser = multer({ storage: storage });

router.get('/all', RestaurantController.getAll);
router.get('/info/:id', RestaurantController.getInfo);
router.post('/new', parser.single('file'), RestaurantController.newRestaurant);

module.exports = router;
