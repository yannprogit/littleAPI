//------------- Import -------------
const { getFoods } = require('../services/foods');

//------------- Methods -------------
//Get the list of books
exports.getFoods = (req, res) => {
    res.json(getFoods()).send();
}