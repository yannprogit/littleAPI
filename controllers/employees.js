//------------- Import -------------
const { getEmployees, getEmployeesForLakojary } = require('../services/employees');

//------------- Methods -------------

exports.getEmployees = (req, res) => {
    res.json(getEmployees()).send();
}

exports.getEmployeesForLakojary = (req, res) => {
    res.json(getEmployeesForLakojary()).send();
}