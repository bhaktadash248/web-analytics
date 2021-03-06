const SplunkLog = require("../config/splunkIndex");
var payloadGenerator = require("./payloadGenerator");

const touchPoint = (reqData) => {
    var Logs = {
        message: reqData.status,
    }

    var returnPayload = payloadGenerator(process.env.Versions, new Date(), "Merchant details", Logs);

    console.log("Sending touch point data payload", JSON.stringify(returnPayload));
    
    SplunkLog.send(returnPayload, function (err, resp, body) {
        console.log("Response from Splunk", body);
    });
}

module.exports = touchPoint;