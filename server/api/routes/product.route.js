const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
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

router.get('/list', ProductController.getList);
router.post('/new', parser.single('file'), ProductController.addNew);
router.post('/edit/:id', ProductController.editProduct);
router.post('/delete/:id', ProductController.deleteProduct);

module.exports = router;
