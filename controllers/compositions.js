//------------- Import -------------
const { getCompositions } = require('../services/compositions');

//------------- Methods -------------
//Get the list of compositions
exports.getCompositions = (req, res) => {
    res.json(getCompositions()).send();
}