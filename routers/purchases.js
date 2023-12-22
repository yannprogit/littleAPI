//------------- Import -------------
const router = require('express').Router();
const purchasesController = require('../controllers/purchases');

//------------- Routes -------------
router.get('/', purchasesController.getPurchases);

module.exports = router;