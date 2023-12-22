//------------- Import -------------
const { getEmployees } = require('../services/employees');

//------------- Methods -------------

exports.getEmployees = (req, res) => {
    res.json(getEmployees()).send();
}