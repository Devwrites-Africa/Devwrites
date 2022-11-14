const express = require('express');
const { errorHandler, notFoundHandler } = require('./middlewares/errorHandler');
const app = express();

//middlwares
app.use(express.json());


app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;