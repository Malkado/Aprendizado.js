const express = require('express');
const router = express.Router();

const carController = require('../controllers/car/car.controller');

router.get('/', function(req, res){
    return res.json({ response: 'server is running'});
});

router.get('/findCars', carController.index);
router.post('/createCars', carController.store);
module.exports = router;