const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getCities);
router.get('/:neighbourhood_group', controller.getCitiesByNeighbourhoodGroup);
router.get('/neighbourhood/:neighbourhood', controller.getCitiesByNeighbourhood);
router.get('/count/cities/:neighbourhood_group', controller.getCountCities);
router.get('/cities/all', controller.getCountAllCities);


module.exports = router;