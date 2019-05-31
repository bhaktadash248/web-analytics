var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const contentDataSplunk = require('../services/touchPointServices');

// create application/json parser
var jsonParser = bodyParser.json();

router.post('/touchPointsActions', jsonParser, function (req, res) {
    (async () => {
        const reqData = {
            'action': "add to cart clicked"
        }
        contentDataSplunk(reqData);
        res.status(200).send(reqData);
    })();
});

module.exports = router;