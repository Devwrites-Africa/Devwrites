const { APP_ENV } = require("./constants");

require("dotenv").config();

const config = Object.freeze({
  env: {
    isProduction: false,
  },
  app: {
    port: process.env.PORT || 3032,
    secret: process.env.APP_SECRET,
    name: process.env.APP_NAME || "dev_write",
    env: process.env.APP_ENV,
    bcryptRounds: 10,
    email: process.env.APP_EMAIL,
  },
  db: {
    name:
      process.env.APP_ENV !== APP_ENV.TEST
        ? process.env.DB_DATABASE
        : process.env.TEST_DB_DATABASE,

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    uri: process.env.DB_URI,
  },
})

module.exports = config;