const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
  restaurant_name: {type: String},
  order_amount: {type: String},
  table_number: {type_: String},
  total_price: {type: Number},
  food: [{type:String}],
  quantity: [{type: String}],
  price: [{type: String}],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Ticket', ticketSchema);
