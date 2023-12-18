//------------- Import -------------
const router = require('express').Router();
const foodsController = require('../controllers/foods');

//------------- Routes -------------
router.get('/', foodsController.getFoods);

module.exports = router;