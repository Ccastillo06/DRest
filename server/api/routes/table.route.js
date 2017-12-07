const express = require('express');
const router = express.Router();
const TableController = require('../controllers/table.controller');

router.get('/list/:id', TableController.listTables);
router.post('/new/:id', TableController.addNew);
router.post('/delete/:id/:table_id', TableController.deleteTable);
router.post('/add/:id', TableController.addOrder);

module.exports = router;
