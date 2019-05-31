var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const iframeServicesSplunk = require('../services/iframeDetails');

// create application/json parser
var jsonParser = bodyParser.json()

router.post('/iframeClosed', jsonParser, function (req, res) {
    (async () => {
        const reqData = {
            'status': "req.body.status.iframeStatus"
        }
        iframeServicesSplunk(reqData);
        res.status(200).send(reqData);
    })();
});

module.exports = router;