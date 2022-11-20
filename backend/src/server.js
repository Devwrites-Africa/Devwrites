const app = require('./app');
const config = require("./config");

app.listen(config.app.port, () => console.log(`
---------------------------------------------------------
    :::: 📡 Server running on port ${config.app.port} 📡 ::::
---------------------------------------------------------
`));
