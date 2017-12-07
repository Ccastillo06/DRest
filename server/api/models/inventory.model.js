const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  productArray: [{
    id: {type: Schema.Types.ObjectId, ref:'Product'},
    quantity: {type: String},
    price: {type: String},
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Inventory', inventorySchema);
