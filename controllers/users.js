//------------- Import -------------
const { getUsers } = require('../services/users');

//------------- Methods -------------

exports.getUsers = (req, res) => {
    res.json(getUsers()).send();
}