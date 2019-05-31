const SplunkLog = require("../config/splunkIndex");
var payloadGenerator = require("./payloadGenerator");

const touchPoint = (reqData) => {
    var Logs = {
        iframeStatus: reqData.status,
        merchantURL: reqData.merchantURL,
        merchantname: reqData.merchantname,
        merchanttitle: reqData.merchanttitle,
        contentPrice: reqData.contentPrice,
        contentid: reqData.contentid,
        merchantid: reqData.merchantid
    }

    var returnPayload = payloadGenerator(process.env.Versions, new Date(), "clickData.status", Logs);

    console.log("Sending action status payload", JSON.stringify(returnPayload));

    SplunkLog.send(returnPayload, function (err, resp, body) {
        console.log("Response from Splunk", body);
    });
}

module.exports = touchPoint;