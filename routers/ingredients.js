//------------- Import -------------
const router = require('express').Router();
const ingredientsController = require('../controllers/ingredients');

//------------- Routes -------------
router.get('/', ingredientsController.getIngredients);

router.get('/lakojary', ingredientsController.getIngredientsForLakojary);

module.exports = router;