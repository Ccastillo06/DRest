const express = require('express');
const app = express();
const auth = require('./routes/auth.route');
const rest = require('./routes/restaurant.route');
const product = require('./routes/product.route');

app.use('/auth', auth);
app.use('/restaurant', rest);
app.use('/product', product);

module.exports = app;
