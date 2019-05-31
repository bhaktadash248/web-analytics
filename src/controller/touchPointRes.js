var express = require("express");
const router = express.Router();
var bodyParser = require('body-parser');

const contentDataSplunk = require('../services/touchPointResServices');

// create application/json parser
var jsonParser = bodyParser.json();

router.post('/touchPointsRes', jsonParser, function (req, res) {
    (async () => {
        const reqData = {
            'status': "status"
        }
        contentDataSplunk(reqData);
        res.status(200).send(reqData);
    })();
});

module.exports = router;