const express = require('express');
const app = express();
const envVar = require("./src/config/env");

const port = envVar.port;

app.use(require("cors")());

app.get("/", (req, res) => {
    res.json({
        message: "Say Analytics",
        timestamp: new Date()
    });
});

try {
    app.use(require('./src'));
    app.listen(port, () => console.log(`Stacker Analytics API is running at: ${port}`));
}
catch (ex) {
    console.log(`Error when starting the Stacker Analytics api.`);
    throw ex;
}