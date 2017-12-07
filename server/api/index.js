const express = require('express');
const app = express();
const auth = require('./routes/auth.route');
const rest = require('./routes/restaurant.route');
const product = require('./routes/product.route');
const inventory = require('./routes/inventory.route');
const menu = require('./routes/menu.route');
const table = require('./routes/table.route');

app.use('/auth', auth);
app.use('/restaurant', rest);
app.use('/product', product);
app.use('/inventory', inventory);
app.use('/menu', menu);
app.use('/table', table);

module.exports = app;
