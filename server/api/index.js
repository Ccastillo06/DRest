const express = require('express');
const app = express();
const auth = require('./routes/auth.route');
const rest = require('./routes/restaurant.route');

app.use('/auth', auth);
app.use('/restaurant', rest);
module.exports = app;
