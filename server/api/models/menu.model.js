const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  productArray: [{
    id: {type: Schema.Types.ObjectId, ref:'Product'},
    ingredients: {type: String},
    price: {type: String},
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Menu', menuSchema);
