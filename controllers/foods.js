//------------- Import -------------
const { getFoods, getFoodsForLakojary } = require('../services/foods');

//------------- Methods -------------
//Get the list of foods
exports.getFoods = (req, res) => {
    res.json(getFoods()).send();
}

exports.getFoodsForLakojary = (req, res) => {
    res.json(getFoodsForLakojary()).send();
}