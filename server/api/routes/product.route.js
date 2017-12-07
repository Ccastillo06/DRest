const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/list', ProductController.getList);
router.post('/new', ProductController.addNew);
router.post('/edit/:id', ProductController.editProduct)

module.exports = router;
