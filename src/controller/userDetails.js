var express = require('express');
const router = express.Router();
var useragent = require('express-useragent');
// const publicIp = require('public-ip');
const iplocation = require("iplocation").default;
const userServicesSplunk = require('../services/userServices');
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();

router.post('/userDetails', jsonParser, function (req, res) {
    (async () => {
        var initialClick = {
            'status' : req.body.status
        }
        let ip = req.ip; //await publicIp.v4();
        var source = req.headers['user-agent'];
        ua = useragent.parse(source);
        var userData = [];
        userData.push(ua);
        iplocation(ip)
            .then((result) => {
                userData.push(result);
                userData.push(initialClick);
                userServicesSplunk(userData);
                res.status(200).send(userData);
            })
            .catch(err => {
                console.log(err)
            });
    })();

});

module.exports = router;