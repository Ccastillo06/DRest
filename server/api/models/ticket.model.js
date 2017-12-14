const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
  total_price: {type: Number},
  table_name: {type: String},
  total_order: [{
    name: {type: String},
    amount: {type: Number},
    price: {type: Number},
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Ticket', ticketSchema);
