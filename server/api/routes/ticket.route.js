const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticket.controller');

router.post('/new', TicketController.createTicket);
router.post('/free', TicketController.freeOrders);
router.post('/update', TicketController.updateInventory);

module.exports = router;
