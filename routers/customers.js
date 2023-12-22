//------------- Import -------------
const router = require('express').Router();
const customersController = require('../controllers/customers');

//------------- Routes -------------
router.get('/', customersController.getCustomers);

module.exports = router;