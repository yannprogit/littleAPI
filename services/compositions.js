//------------- Data -------------
const compositions = [
    { foodId: 1, ingredientId: 4 },   // Baguette: Flour
    { foodId: 1, ingredientId: 2 },   // Baguette: Salt
    { foodId: 1, ingredientId: 1 },   // Baguette: Yeast
    { foodId: 1, ingredientId: 3 },   // Baguette: Water

    { foodId: 2, ingredientId: 4 },   // Croissant: Flour
    { foodId: 2, ingredientId: 2 },   // Croissant: Salt
    { foodId: 2, ingredientId: 1 },   // Croissant: Yeast
    { foodId: 2, ingredientId: 8 },   // Croissant: Egg
    { foodId: 2, ingredientId: 9 },   // Croissant: Butter

    { foodId: 3, ingredientId: 4 },   // Pain au Chocolat: Flour
    { foodId: 3, ingredientId: 2 },   // Pain au Chocolat: Salt
    { foodId: 3, ingredientId: 1 },   // Pain au Chocolat: Yeast
    { foodId: 3, ingredientId: 7 },   // Pain au Chocolat: Chocolate

    { foodId: 4, ingredientId: 4 },   // Éclair: Flour
    { foodId: 4, ingredientId: 2 },   // Éclair: Salt
    { foodId: 4, ingredientId: 8 },   // Éclair: Egg
    { foodId: 4, ingredientId: 14 },  // Éclair: Various sweet fillings

    { foodId: 5, ingredientId: 4 },   // Macaron: Flour
    { foodId: 5, ingredientId: 11 },  // Macaron: Almond flour
    { foodId: 5, ingredientId: 3 },   // Macaron: Water
    { foodId: 5, ingredientId: 16 },  // Macaron: Quinoa flour

    { foodId: 6, ingredientId: 4 },   // Cinnamon Roll: Flour
    { foodId: 6, ingredientId: 2 },   // Cinnamon Roll: Salt
    { foodId: 6, ingredientId: 8 },   // Cinnamon Roll: Egg
    { foodId: 6, ingredientId: 11 },  // Cinnamon Roll: Almond flour
    { foodId: 6, ingredientId: 5 },   // Cinnamon Roll: Sugar

    { foodId: 7, ingredientId: 4 },   // Sourdough Bread: Flour
    { foodId: 7, ingredientId: 17 },  // Sourdough Bread: Milk
    { foodId: 7, ingredientId: 3 },   // Sourdough Bread: Water
    { foodId: 7, ingredientId: 16 },  // Sourdough Bread: Quinoa flour

    { foodId: 8, ingredientId: 4 },   // Danish Pastry: Flour
    { foodId: 8, ingredientId: 2 },   // Danish Pastry: Salt
    { foodId: 8, ingredientId: 8 },   // Danish Pastry: Egg
    { foodId: 8, ingredientId: 14 },  // Danish Pastry: Various sweet fillings

    { foodId: 9, ingredientId: 4 },   // Pretzel: Flour
    { foodId: 9, ingredientId: 2 },   // Pretzel: Salt
    { foodId: 9, ingredientId: 17 },  // Pretzel: Milk

    { foodId: 10, ingredientId: 4 },  // Focaccia: Flour
    { foodId: 10, ingredientId: 15 }, // Focaccia: Olive oil
    { foodId: 10, ingredientId: 20 }, // Focaccia: Rye flour
    { foodId: 10, ingredientId: 21 }, // Focaccia: Cornmeal

    { foodId: 11, ingredientId: 4 },  // Brioche: Flour
    { foodId: 11, ingredientId: 2 },  // Brioche: Salt
    { foodId: 11, ingredientId: 8 },  // Brioche: Egg
    { foodId: 11, ingredientId: 16 }, // Brioche: Quinoa flour

    { foodId: 12, ingredientId: 4 },  // Scone: Flour
    { foodId: 12, ingredientId: 2 },  // Scone: Salt
    { foodId: 12, ingredientId: 5 },  // Scone: Sugar
    { foodId: 12, ingredientId: 3 },  // Scone: Water

    { foodId: 13, ingredientId: 4 },  // French Toast: Flour
    { foodId: 13, ingredientId: 17 }, // French Toast: Milk
    { foodId: 13, ingredientId: 8 },  // French Toast: Egg
    { foodId: 13, ingredientId: 7 },  // French Toast: Chocolate
    { foodId: 13, ingredientId: 16 }, // French Toast: Quinoa flour

    { foodId: 14, ingredientId: 4 },  // Pita Bread: Flour
    { foodId: 14, ingredientId: 2 },  // Pita Bread: Salt
    { foodId: 14, ingredientId: 1 },  // Pita Bread: Yeast
    { foodId: 14, ingredientId: 3 },  // Pita Bread: Water

    { foodId: 15, ingredientId: 4 },  // Ciabatta: Flour
    { foodId: 15, ingredientId: 15 }, // Ciabatta: Olive oil
    { foodId: 15, ingredientId: 20 }, // Ciabatta: Rye flour
    { foodId: 15, ingredientId: 21 }, // Ciabatta: Cornmeal

    { foodId: 16, ingredientId: 4 },  // Pumpernickel: Flour
    { foodId: 16, ingredientId: 20 }, // Pumpernickel: Rye flour
    { foodId: 16, ingredientId: 18 }, // Pumpernickel: Cornmeal

    { foodId: 17, ingredientId: 4 },  // Crumpet: Flour
    { foodId: 17, ingredientId: 2 },  // Crumpet: Salt
    { foodId: 17, ingredientId: 3 },  // Crumpet: Water
    { foodId: 17, ingredientId: 5 },  // Crumpet: Sugar

    { foodId: 18, ingredientId: 4 },  // Panettone: Flour
    { foodId: 18, ingredientId: 2 },  // Panettone: Salt
    { foodId: 18, ingredientId: 11 }, // Panettone: Almond flour
    { foodId: 18, ingredientId: 19 }, // Panettone: Hazelnuts

    { foodId: 19, ingredientId: 4 },  // Kouign-Amann: Flour
    { foodId: 19, ingredientId: 9 },  // Kouign-Amann: Butter
    { foodId: 19, ingredientId: 27 }, // Kouign-Amann: Honey

    { foodId: 20, ingredientId: 4 },  // Bagel: Flour
    { foodId: 20, ingredientId: 2 },  // Bagel: Salt
    { foodId: 20, ingredientId: 3 },  // Bagel: Water

    { foodId: 21, ingredientId: 4 },  // Rye Bread: Flour
    { foodId: 21, ingredientId: 20 }, // Rye Bread: Rye flour
    { foodId: 21, ingredientId: 18 }, // Rye Bread: Cornmeal

    { foodId: 22, ingredientId: 4 },  // Cornbread: Flour
    { foodId: 22, ingredientId: 19 }, // Cornbread: Cornmeal
    { foodId: 22, ingredientId: 2 },  // Cornbread: Salt
    { foodId: 22, ingredientId: 3 },  // Cornbread: Water

    { foodId: 23, ingredientId: 4 },  // Anadama Bread: Flour
    { foodId: 23, ingredientId: 2 },  // Anadama Bread: Salt
    { foodId: 23, ingredientId: 3 },  // Anadama Bread: Water
    { foodId: 23, ingredientId: 19 }, // Anadama Bread: Molasses

    { foodId: 24, ingredientId: 4 },  // Flatbread: Flour
    { foodId: 24, ingredientId: 2 },  // Flatbread: Salt
    { foodId: 24, ingredientId: 3 },  // Flatbread: Water

    { foodId: 25, ingredientId: 4 },  // Pandoro: Flour
    { foodId: 25, ingredientId: 14 }, // Pandoro: Various sweet fillings
    { foodId: 25, ingredientId: 28 }, // Pandoro: Orange zest

    { foodId: 26, ingredientId: 2 },  // Baklawa: Salt
    { foodId: 26, ingredientId: 22 }, // Baklawa: Peanuts
    { foodId: 26, ingredientId: 3 },  // Baklawa: Water

    { foodId: 27, ingredientId: 28 }, // Zlabia: Orange zest
    { foodId: 27, ingredientId: 27 }, // Zlabia: Honey
];

//------------- Methods -------------

//Return the list of compositions
exports.getCompositions = () => {
    return compositions;
}