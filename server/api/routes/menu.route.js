const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu.controller');

router.get('/list/:id', MenuController.listMenu);
router.post('/new/:id', MenuController.createNew);
router.post('/add/:id', MenuController.addProduct);

module.exports = router;
