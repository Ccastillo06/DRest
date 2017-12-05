const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TYPES = ['Admin', 'Owner', 'Manager', 'Waiter', 'Customer'];

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String},
  role: {type: String, required: true, enum: TYPES},
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
