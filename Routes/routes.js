const express = require('express');
const router = express.Router();


const ridesController = require('../Controller/Rides');
const facilitiesController=require('../Controller/Facilities');
const queriesController = require('../Controller/Queries');


router.post('/sendQuery', queriesController.sendQuery);
router.get('/getRidesForType/:type', ridesController.getRidesForType);
router.get('/getFacilities', facilitiesController.getFacilities);
module.exports = router;