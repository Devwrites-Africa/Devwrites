const app = require('./app');
const config = require("./config");
const { DB } = require('./config/database');
const logger = require('./lib/logger');

const startApp = async () => {
    await DB.start();
    app.listen(config.app.port, () => console.log(`
    ---------------------------------------------------------
        :::: 📡 Server running on port ${config.app.port} 📡 ::::
    ---------------------------------------------------------
    `));
}

startApp().catch(console.error);
