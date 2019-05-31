const SplunkLog = require("../config/splunkIndex");
var payloadGenerator = require("./payloadGenerator");

const UserDetails = (reqData) => {
    const data = reqData[0];
    const locationData = reqData[1];
    const clickData = reqData[2];
    // user devices details

    var Logs = {
        isAuthoritative: data.isAuthoritative,
        isMobile: data.isMobile,
        isTablet: data.isTablet,
        isiPad: data.isiPad,
        isiPod: data.isiPod,
        isiPhone: data.isiPhone,
        isAndroid: data.isAndroid,
        isBlackberry: data.isBlackberry,
        isOpera: data.isOpera,
        isIE: data.isIE,
        isEdge: data.isEdge,
        isIECompatibilityMode: data.isIECompatibilityMode,
        isSafari: data.isSafari,
        isFirefox: data.isFirefox,
        isWebkit: data.isWebkit,
        isChrome: data.isChrome,
        isKonqueror: data.isKonqueror,
        isOmniWeb: data.isOmniWeb,
        isSeaMonkey: data.isSeaMonkey,
        isFlock: data.isFlock,
        isAmaya: data.isAmaya,
        isPhantomJS: data.isPhantomJS,
        isEpiphany: data.isEpiphany,
        isDesktop: data.isDesktop,
        isWindows: data.isWindows,
        isLinux: data.isLinux,
        isLinux64: data.isLinux64,
        isMac: data.isMac,
        isChromeOS: data.isChromeOS,
        isBada: data.isBada,
        isSamsung: data.isSamsung,
        isRaspberry: data.isRaspberry,
        isBot: data.isBot,
        isCurl: data.isCurl,
        isAndroidTablet: data.isAndroidTablet,
        isWinJs: data.isWinJs,
        isKindleFire: data.isKindleFire,
        isSilk: data.isSilk,
        isCaptive: data.isCaptive,
        isSmartTV: data.isSmartTV,
        isUC: data.isUC,
        isFacebook: data.isFacebook,
        isAlamoFire: data.isAlamoFire,
        silkAccelerated: data.silkAccelerated,
        browser: data.browser,
        version: data.version,
        os: data.os,
        platform: data.platform,
        geoIp: data.geoIp,
        source: data.source,
        country: locationData.country,
        countryCode: locationData.countryCode,
        region: locationData.region,
        regionCode: locationData.regionCode,
        city: locationData.city,
        postal: locationData.postal,
        ip: locationData.ip,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        timezone: locationData.timezone,
        status: clickData.status
    };

    var returnPayload = payloadGenerator(process.env.Versions, new Date(), clickData.status , Logs);

    console.log("Sending device details payload", JSON.stringify(returnPayload));
    
    SplunkLog.send(returnPayload, function (err, resp, body) {
        console.log("Response from Splunk", body);
    });
};

module.exports = UserDetails;