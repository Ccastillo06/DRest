const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/list', ProductController.getList);
router.post('/new', ProductController.addNew);
router.post('/edit/:id', ProductController.editProduct);
router.post('/delete/:id', ProductController.deleteProduct);

module.exports = router;
