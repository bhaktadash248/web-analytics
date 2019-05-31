var SplunkLogger = require("splunk-logging").Logger;

var config = {
    token: "4d076fda-1840-4043-b4bc-969913fd52f0",
    url: "https://localhost:8088"
};

var SplunkLog = new SplunkLogger(config);

module.exports = SplunkLog;

// Enable SSL certificate validation
// Logger.requestOptions.strictSSL = true;