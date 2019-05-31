const payload = (ServiceVersion, timestamp, description, Logs) => {
    var generatePayload = {
        message: {
            ServiceVersion: ServiceVersion,
            timestamp: timestamp,
            description: description,
            Logs: [
                Logs
            ],
        }
    }
    return generatePayload;
}

module.exports = payload;