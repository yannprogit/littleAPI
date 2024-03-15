//------------- Import -------------
const router = require('express').Router();
const usersController = require('../controllers/users');

//------------- Routes -------------
router.get('/', usersController.getUsers);

module.exports = router;