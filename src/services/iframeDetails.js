const SplunkLog = require("../config/splunkIndex");
var payloadGenerator = require("./payloadGenerator");

const iframeDetails = (reqData) => {
    var Logs = {
            iframeStatus: reqData.status,
        }

    var returnPayload = payloadGenerator(process.env.Versions, new Date(), "reqData.status", Logs);

    console.log("Sending iframe status payload", JSON.stringify(returnPayload));
    
    SplunkLog.send(returnPayload, function (err, resp, body) {
        console.log("Response from Splunk", body);
    });
}

module.exports = iframeDetails;