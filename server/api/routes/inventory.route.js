const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventory.controller');

router.get('/list/:id', InventoryController.listInventory);
router.post('/new/:id', InventoryController.createNew);
router.post('/add/:id', InventoryController.addProduct);

module.exports = router;
