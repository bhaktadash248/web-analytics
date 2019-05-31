var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()
const loginServicesSplunk = require('../services/loginSuccess');

router.post('/fbLoginRegistered', jsonParser, function (req, res) {
    (async () => {
        var reqData = {
            'status': req.body.status
        }
        loginServicesSplunk(reqData);
        res.status(200).send(reqData);
    })();
});

module.exports = router;