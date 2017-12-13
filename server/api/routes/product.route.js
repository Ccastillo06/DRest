const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const multer = require('multer');
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'DRest',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'my-file-name');
  }
});
var parser = multer({ storage: storage });

router.get('/list', ProductController.getList);
router.get('/one/:id', ProductController.getOneProduct);
router.post('/delete', ProductController.deleteProduct);
router.post('/edit/:id', parser.single('file'), ProductController.editProduct);
router.post('/new', parser.single('file'), ProductController.addNew);


module.exports = router;
