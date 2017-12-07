const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CLASSES = ['Food', 'Fish', 'Utils'];
const DENOM = ['Meat', 'Fish', 'Sauce', 'Condiment', 'Fruit', 'Vegetable', 'Cereal', 'Alcohol', 'Alcohol-Free'];

const productSchema = new Schema({
  name: {type: String, required: true},
  description: {type:String},
  image: {type: String},
  classification: {type:String, required: true, enum: CLASSES},
  denomination: {type: String, required: true, enum: DENOM},
  owner: {type: Schema.Types.ObjectId, ref:'User', required: true},
})

module.exports = mongoose.model('Product', productSchema);
