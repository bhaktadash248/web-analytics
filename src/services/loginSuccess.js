const SplunkLog = require("../config/splunkIndex");
var payloadGenerator = require("./payloadGenerator");

const loginSuccess = (reqData) => {
    var Logs = {
            loginStatus: reqData.status
        }

    var returnPayload = payloadGenerator(process.env.Versions, new Date(), "reqData.status", Logs);

    console.log("Sending login status payload", JSON.stringify(returnPayload));
    
    SplunkLog.send(returnPayload, function (err, resp, body) {
        console.log("Response from Splunk", body);
    });
}

module.exports = loginSuccess;