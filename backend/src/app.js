const express = require('express');
const app = express();

//middlwares
app.use(express.json());

module.exports = app;