const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {type: String, required: true},
  description : {type: String},
  location: {
    latitude: {type: String},
    longitude: {type: String},
  },
  owner: {type: Schema.Types.ObjectId, ref:'User', required: true},
  workers: [{type: Schema.Types.ObjectId, ref:'User'}],
  invetory: {type: Schema.Types.ObjectId, ref:'Inventory'},
  menu: {type: Schema.Types.ObjectId, ref:'Menu'},
  table: {type: Schema.Types.ObjectId, ref:'Table'},
  tickets: [{type: Schema.Types.ObjectId, ref:'Tickets'}],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
