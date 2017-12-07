const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ZONES = ['exterior', 'interior'];

const tableSchema = new Schema({
  max_people: {type: String, required: true},
  table_number: {type: String, required: true},
  title: {type: String, required: true},
  zone: {type: String, enum: ZONES, required: true}
},{
  timestamps: true,
})

module.exports = mongoose.model('Table', tableSchema);
