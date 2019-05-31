const express = require('express');
const router = express.Router();
const envVar = require("./config/env");

const version = envVar.version;

router.use("/analytics/" + version , require('./controller/userDetails'));
router.use("/analytics/" + version , require('./controller/loginDetails'));
router.use("/analytics/" + version , require('./controller/iframeStatus'));
router.use("/analytics/" + version , require('./controller/fbLogin'));
router.use("/analytics/" + version , require('./controller/touchPointActions'));
router.use("/analytics/" + version, require('./controller/touchPointRes'));
router.use("/analytics/" + version , require('./controller/merchantDetails'));

module.exports = router;