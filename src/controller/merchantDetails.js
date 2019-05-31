var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const touchPointSplunk = require('../services/conetentDataServices');

// create application/json parser
var jsonParser = bodyParser.json();

router.post('/merchantDetails', jsonParser, function (req, res) {
    (async () => {
        const reqData = {
            'status': "req.body.status",
            'merchantURL': "merchantURL",
            'merchantname': "merchantname",
            'merchanttitle': "merchanttitle",
            'contentPrice': "contentPrice",
            'contentid': "contentid",
            'merchantid': "merchantid"
        }
        touchPointSplunk(reqData);
        res.status(200).send(reqData);
    })();
});

module.exports = router;