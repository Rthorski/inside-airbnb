const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getCities);
router.get('/:neighbourhood_group', controller.getCitiesByNeighbourhoodGroup);
router.get('/neighbourhood/:neighbourhood', controller.getCitiesByNeighbourhood);


module.exports = router;