const router = require('express').Router();
const {UserAdd} = require('../controller/UserAdd');
const {AllData} = require('../controller/AllData');
router.post('/useradd',UserAdd);
router.post('/fetch',AllData);

module.exports = router;