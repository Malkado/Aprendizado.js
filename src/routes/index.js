const express = require('express');
const router = express.Router();



router.get('/', function(req, res){
    res.json({ response: 'server is running'});
});

module.exports = router;