//------------- Data -------------
const foods = [
  { id: 1, name: "Baguette", price: 3.50, description: "It's just a French baguette", stock: 180 },
  { id: 2, name: "Croissant", price: 2.50, description: "A classic French pastry", stock: 320 },
  { id: 3, name: "Pain au Chocolat", price: 2.75, description: "Flaky pastry with chocolate filling", stock: 90 },
  { id: 4, name: "Éclair", price: 4.00, description: "Long pastry filled with cream and topped with icing", stock: 250 },
  { id: 5, name: "Macaron", price: 1.75, description: "Colorful almond meringue cookie with filling", stock: 420 },
  { id: 6, name: "Cinnamon Roll", price: 3.00, description: "Sweet roll with cinnamon and icing", stock: 150 },
  { id: 7, name: "Sourdough Bread", price: 4.50, description: "Artisanal bread with a tangy flavor", stock: 300 },
  { id: 8, name: "Danish Pastry", price: 3.25, description: "Flaky pastry with various sweet fillings", stock: 80 },
  { id: 9, name: "Pretzel", price: 2.00, description: "Twisted bread snack, often salted", stock: 470 },
  { id: 10, name: "Focaccia", price: 5.00, description: "Italian flatbread with herbs and olive oil", stock: 120 },
  { id: 11, name: "Brioche", price: 3.75, description: "Sweet yeast bread, often with eggs and butter", stock: 390 },
  { id: 12, name: "Scone", price: 2.25, description: "British pastry, usually sweet or savory", stock: 220 },
  { id: 13, name: "French Toast", price: 6.50, description: "Bread soaked in eggs and milk, then fried or baked", stock: 170 },
  { id: 14, name: "Pita Bread", price: 1.50, description: "Soft, slightly leavened flatbread", stock: 280 },
  { id: 15, name: "Ciabatta", price: 4.25, description: "Italian white bread, chewy with a porous crumb", stock: 430 },
  { id: 16, name: "Pumpernickel", price: 3.00, description: "Dark, dense German bread", stock: 100 },
  { id: 17, name: "Crumpet", price: 2.75, description: "British griddle cake with distinctive pores", stock: 350 },
  { id: 18, name: "Panettone", price: 7.00, description: "Italian sweet bread, often enjoyed during Christmas", stock: 200 },
  { id: 19, name: "Kouign-Amann", price: 5.50, description: "Breton pastry, known for its layers of butter and sugar", stock: 450 },
  { id: 20, name: "Bagel", price: 2.50, description: "Ring-shaped bread roll, often boiled before baking", stock: 60 },
  { id: 21, name: "Rye Bread", price: 3.25, description: "Bread made with a combination of rye and wheat flours", stock: 390 },
  { id: 22, name: "Cornbread", price: 2.00, description: "Bread made with cornmeal, a staple in Southern cuisine", stock: 80 },
  { id: 23, name: "Anadama Bread", price: 4.75, description: "New England bread made with wheat flour, cornmeal, and molasses", stock: 320 },
  { id: 24, name: "Flatbread", price: 2.50, description: "Unleavened bread, often thin and crispy", stock: 130 },
  { id: 25, name: "Pandoro", price: 8.00, description: "Italian sweet bread, similar to panettone", stock: 270 },
  { id: 26, name: "Baklawa", price: 2.25, description: "Maghrebian cake with peanuts", stock: 0 },
  { id: 27, name: "Zlabia", price: 2.00, description: "Traditional North African confectionery", stock: 180 },
];


//------------- Methods -------------

//Return the list of foods
exports.getFoods = () => {
    return foods;
}