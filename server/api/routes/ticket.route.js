const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticket.controller');

router.post('/create/:table_id/:rest_id', TicketController.generateTicket)
router.post('/free', TicketController.freeOrders);

module.exports = router;
