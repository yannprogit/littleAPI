//------------- Import -------------
const { getIngredients, getIngredientsForLakojary } = require('../services/ingredients');

//------------- Methods -------------
//Get the list of ingredients
exports.getIngredients = (req, res) => {
    res.json(getIngredients()).send();
}

exports.getIngredientsForLakojary = (req, res) => {
    res.json(getIngredientsForLakojary()).send();
}