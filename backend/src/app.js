const express = require('express');
const routes = require('./routes');
const cors = require("cors");
const helmet = require("helmet");

const {
  errorHandler,
  notFoundHandler
} = require('./middlewares/errorHandler');

const app = express();

/* MIDDLEWARES */
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: 'true' }));

/* ROUTES */
app.use('/v1', routes)
app.use('/healthz', (req, res) => res.send('Ok'));

/* HANDLER */
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;