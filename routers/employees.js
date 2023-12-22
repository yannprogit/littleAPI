//------------- Import -------------
const router = require('express').Router();
const employeesController = require('../controllers/employees');

//------------- Routes -------------
router.get('/', employeesController.getEmployees);

module.exports = router;