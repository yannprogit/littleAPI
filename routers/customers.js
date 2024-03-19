//------------- Import -------------
const router = require('express').Router();
const customersController = require('../controllers/customers');

//------------- Routes -------------
router.get('/', customersController.getCustomers);

router.get('/lakojary', customersController.getCustomersForLakojary);

module.exports = router;