//------------- Import -------------
const { getFoods } = require('../services/foods');

//------------- Methods -------------
//Get the list of foods
exports.getFoods = (req, res) => {
    res.json(getFoods()).send();
}