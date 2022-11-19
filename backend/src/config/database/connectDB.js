const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// Connect to database
const connectDatabase =
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Database connected!!!`);
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = { connectDatabase }; 