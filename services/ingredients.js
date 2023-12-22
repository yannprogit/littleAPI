//------------- Data -------------
const ingredients = [
  { id: 1, name: 'Yeast', stock: 120 },
  { id: 2, name: 'Salt', stock: 280 },
  { id: 3, name: 'Water', stock: 180 },
  { id: 4, name: 'Flour', stock: 420 },
  { id: 5, name: 'Sugar', stock: 320 },
  { id: 6, name: 'Puff pastry', stock: 90 },
  { id: 7, name: 'Chocolate', stock: 250 },
  { id: 8, name: 'Egg', stock: 150 },
  { id: 9, name: 'Butter', stock: 300 },
  { id: 10, name: 'Cream', stock: 80 },
  { id: 11, name: 'Almond flour', stock: 470 },
  { id: 12, name: 'Cinnamon', stock: 120 },
  { id: 13, name: 'Sourdough starter', stock: 390 },
  { id: 14, name: 'Various sweet fillings', stock: 220 },
  { id: 15, name: 'Olive oil', stock: 170 },
  { id: 16, name: 'Quinoa flour', stock: 280 },
  { id: 17, name: 'Milk', stock: 430 },
  { id: 18, name: 'Cornmeal', stock: 100 },
  { id: 19, name: 'Molasses', stock: 0 },
  { id: 20, name: 'Rye flour', stock: 200 },
  { id: 21, name: 'Cornmeal', stock: 450 },
  { id: 22, name: 'Peanuts', stock: 60 },
  { id: 23, name: 'Hazelnuts', stock: 390 },
  { id: 24, name: 'Vanilla extract', stock: 80 },
  { id: 25, name: 'Baking powder', stock: 320 },
  { id: 26, name: 'Pistachios', stock: 130 },
  { id: 27, name: 'Honey', stock: 270 },
  { id: 28, name: 'Orange zest', stock: 490 },
  { id: 29, name: 'Vanilla bean', stock: 180 },
  { id: 30, name: 'Almonds', stock: 180 },
  { id: 31, name: 'Cocoa powder', stock: 300 },
  { id: 32, name: 'Raisins', stock: 200 },
  { id: 33, name: 'Cardamom', stock: 450 },
  { id: 34, name: 'Nutmeg', stock: 60 },
  { id: 35, name: 'Pumpkin puree', stock: 390 },
  { id: 36, name: 'Walnuts', stock: 80 },
  { id: 37, name: 'Maple syrup', stock: 430 },
  { id: 38, name: 'Poppy seeds', stock: 100 },
  { id: 39, name: 'Coconut milk', stock: 270 },
  { id: 40, name: 'Turmeric', stock: 490 },
];

//------------- Methods -------------

//Return the list of ingredients
exports.getIngredients = () => {
    return ingredients;
}