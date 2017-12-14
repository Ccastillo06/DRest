const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ZONES = ['Exterior', 'Interior'];

const tableSchema = new Schema({
  table_number: {type: String, required: true},
  title: {type: String, required: true},
  zone: {type: String, enum: ZONES, required: true},
  orders: [{
    _id: {type: Schema.Types.ObjectId, ref:'Product'},
    qty: {type: Number}
  }]
},{
  timestamps: true,
})

module.exports = mongoose.model('Table', tableSchema);
