//------------- Import -------------
const { getIngredients } = require('../services/ingredients');

//------------- Methods -------------
//Get the list of ingredients
exports.getIngredients = (req, res) => {
    res.json(getIngredients()).send();
}