const app = require('./app');
require('./config/database/connectDB');
const config = require("./config");

app.listen(config.app.port, () => console.log(`
---------------------------------------------------------
    :::: 📡 Server running on port ${config.app.port} 📡 ::::
---------------------------------------------------------
`));
