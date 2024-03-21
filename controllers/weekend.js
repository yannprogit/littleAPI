//------------- Import -------------
const { getWeekend } = require('../services/weekend');

//------------- Methods -------------

exports.getWeekend = (req, res) => {
    res.json(getWeekend()).send();
}