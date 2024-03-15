//------------- Import -------------
const router = require('express').Router();
const foodsController = require('../controllers/foods');

//------------- Routes -------------
router.get('/', foodsController.getFoods);

router.get('/lakojary', foodsController.getFoodsForLakojary);

module.exports = router;