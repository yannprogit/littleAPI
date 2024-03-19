//------------- Import -------------
const router = require('express').Router();
const employeesController = require('../controllers/employees');

//------------- Routes -------------
router.get('/', employeesController.getEmployees);

router.get('/lakojary', employeesController.getEmployeesForLakojary);

module.exports = router;