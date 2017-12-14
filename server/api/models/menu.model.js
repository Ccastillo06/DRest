const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  productArray: [{
    _id: {type: Schema.Types.ObjectId, ref:'Product'},
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Menu', menuSchema);
