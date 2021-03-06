const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TYPES = ['Admin', 'Owner', 'Manager', 'Waiter', 'Customer'];

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String},
  role: {type: String, required: true, enum: TYPES},
  restaurants: [{type: Schema.Types.ObjectId, ref:'Restaurant'}],
  works_in: {type: Schema.Types.ObjectId, ref:'Restaurant'},
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
