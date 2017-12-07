const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventory.controller');

router.post('/new/:id', InventoryController.createNew);

module.exports = router;
