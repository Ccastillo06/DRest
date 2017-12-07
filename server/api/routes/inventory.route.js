const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventory.controller');

router.post('/new/:id', InventoryController.createNew);
router.post('/add/:id', InventoryController.addProduct);

module.exports = router;
