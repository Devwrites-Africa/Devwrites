const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('../../lib/logger')

dotenv.config();

// Connect to database
const connectDatabase =
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      logger.info(`Database connected!!!`);
    })
    .catch((err) => {
        logger.error(err);
    });

module.exports = { connectDatabase }; 