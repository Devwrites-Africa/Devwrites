const express = require('express');
const dotenv = require('dotenv');
const app = express();

//middlwares
app.use(express.json());
app.use(dotenv.config())

module.exports = app;