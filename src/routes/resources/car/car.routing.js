const { response } = require('express');
const express = require('express');
const router = express.Router();

const carController = require('../../../controllers/car/car.controller');

router.get('/findCars', carController.find(req, res));
module.exports = router;