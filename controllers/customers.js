//------------- Import -------------
const { getCustomers } = require('../services/customers');

//------------- Methods -------------

exports.getCustomers = (req, res) => {
    res.json(getCustomers()).send();
}