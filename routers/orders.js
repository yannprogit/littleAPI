//------------- Import -------------
const router = require('express').Router();
const ordersController = require('../controllers/orders');

//------------- Routes -------------
router.get('/', ordersController.getOrders);

module.exports = router;