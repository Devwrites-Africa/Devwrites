const mongoose = require('mongoose');
const log = require('../../lib/logger')
const dotenv = require('dotenv');
const path = require('path');
const config = require('..');

dotenv.config(path.join(__dirname, '../../.env'));

const dbUri =
  process.env.DB_URI.replace('<dbname>', config.db.name) ||
  `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}?authSource=${config.db.authSource}`;

class DB {
  connection = undefined;

  static async start() {
    const db = new DB();
    await db.connect();
    return db;
  }

  async connect() {
    try {
      this.connection = await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console
        .log(
          `
    ---------------------------------------------------------
        :::: 🏬 MongoDB connected:: @${this.connection.connection.host} 🏬 ::::
    ---------------------------------------------------------`
        );
      return this;
    } catch (err) {
      console.error('mongodb failed to connect', err);
      // process.exit(1);
    }
  }

  async disconnect() {
    await mongoose.connection.close();
  }
}

module.exports = { dbUri, DB };
