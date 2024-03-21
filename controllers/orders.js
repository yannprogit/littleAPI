//------------- Import -------------
const { getOrders } = require('../services/orders');

//------------- Methods -------------

exports.getOrders = (req, res) => {
    res.json(getOrders()).send();
}