const express = require('express');
const routes = require('./routes');

const {
  errorHandler,
  notFoundHandler
} = require('./middlewares/errorHandler');

const app = express();

//middlwares
app.use(express.json());

app.use('/v1', routes)
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;