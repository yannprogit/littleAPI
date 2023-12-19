//------------- Data -------------
const ingredients = [
    { id: 1, name: 'Yeast' },
    { id: 2, name: 'Salt' },
    { id: 3, name: 'Water' },
    { id: 4, name: 'Flour' },
    { id: 5, name: 'Sugar' },
    { id: 6, name: 'Puff pastry' },
    { id: 7, name: 'Chocolate' },
    { id: 8, name: 'Egg' },
    { id: 9, name: 'Butter' },
    { id: 10, name: 'Cream' },
    { id: 11, name: 'Almond flour' },
    { id: 12, name: 'Cinnamon' },
    { id: 13, name: 'Sourdough starter' },
    { id: 14, name: 'Various sweet fillings' },
    { id: 15, name: 'Olive oil' },
    { id: 16, name: 'Quinoa flour' },
    { id: 17, name: 'Milk' },
    { id: 18, name: 'Cornmeal' },
    { id: 19, name: 'Molasses' },
    { id: 20, name: 'Rye flour' },
    { id: 21, name: 'Cornmeal' },
    { id: 22, name: 'Peanuts' },
    { id: 23, name: 'Hazelnuts' },
    { id: 24, name: 'Vanilla extract' },
    { id: 25, name: 'Baking powder' },
    { id: 26, name: 'Pistachios' },
    { id: 27, name: 'Honey' },
    { id: 28, name: 'Orange zest' },
    { id: 29, name: 'Vanilla bean' },
    { id: 30, name: 'Almonds' },
    { id: 31, name: 'Cocoa powder' },
    { id: 32, name: 'Raisins' },
    { id: 33, name: 'Cardamom' },
    { id: 34, name: 'Nutmeg' },
    { id: 35, name: 'Pumpkin puree' },
    { id: 36, name: 'Walnuts' },
    { id: 37, name: 'Maple syrup' },
    { id: 38, name: 'Poppy seeds' },
    { id: 39, name: 'Coconut milk' },
    { id: 40, name: 'Turmeric' },
  ];

//------------- Methods -------------

//Return the list of ingredients
exports.getIngredients = () => {
    return ingredients;
}