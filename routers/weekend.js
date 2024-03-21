//------------- Import -------------
const router = require('express').Router();
const weekendController = require('../controllers/weekend');

//------------- Routes -------------
router.get('/', weekendController.getWeekend);

module.exports = router;