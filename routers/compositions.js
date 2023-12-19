//------------- Import -------------
const router = require('express').Router();
const compositionsController = require('../controllers/compositions');

//------------- Routes -------------
router.get('/', compositionsController.getCompositions);

module.exports = router;