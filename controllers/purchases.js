//------------- Import -------------
const { getPurchases } = require('../services/purchases');

//------------- Methods -------------

exports.getPurchases = (req, res) => {
    res.json(getPurchases()).send();
}