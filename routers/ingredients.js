//------------- Import -------------
const router = require('express').Router();
const ingredientsController = require('../controllers/ingredients');

//------------- Routes -------------
router.get('/', ingredientsController.getIngredients);

module.exports = router;