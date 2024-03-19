//------------- Import -------------
const { getCustomers, getCustomersForLakojary } = require('../services/customers');

//------------- Methods -------------

exports.getCustomers = (req, res) => {
    res.json(getCustomers()).send();
}

exports.getCustomersForLakojary = (req, res) => {
    res.json(getCustomersForLakojary()).send();
}