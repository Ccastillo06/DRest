const express = require('express');
const router = express.Router();
const TableController = require('../controllers/table.controller');

router.get('/one/:id', TableController.getOne)
router.post('/new/:id', TableController.addNew);
router.post('/delete/:id/:table_id', TableController.deleteTable);
router.post('/add/:obj_id/:table_id', TableController.addOrder);
router.post('/quit/:obj_id/:table_id', TableController.quitOrder);

module.exports = router;
