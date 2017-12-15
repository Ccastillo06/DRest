const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticket.controller');

router.get('/all/:restId', TicketController.getAll);
router.post('/update', TicketController.updateInventory);
router.post('/mail/:usermail', TicketController.sendMail);
router.post('/create/:table_id/:rest_id', TicketController.generateTicket)
router.post('/free/:table_id/:rest_id', TicketController.freeOrders);

module.exports = router;
