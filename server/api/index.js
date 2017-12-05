const express = require('express');
const app = express();
const auth = require('./routes/auth.route');

app.use('/auth', auth);

module.exports = app;
