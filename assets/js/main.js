// Constants.

var PROTEINS = [
  'Pork Tenderloin',
  'Pork Shoulder/Butt',
  'Chicken Theigh',
  'Chicken Breast'
];

var VEGETABLES = [
  'Yellow Onion, Carrot, Potato',
  'Tomato, Pearl Onion, Yellow Squash',
  'Cauliflower, Olive, Butternut Squash',
  'Red Onion Broccoli, Peas',
  'Corn, Red Bell Pepper, Sweet Potato',
];

var LIQUIDS = [
  'Meat Broth',
  'Vegetable Broth, White Wine',
  'Fire Roasted Tomatoes (w/juice)',
  'Coconut Milk',
  'Dark Beer!',
];

var HERBS = [
  'Thyme, Parsley',
  'Oregano, Rosemary',
  'Cumin, Coriander',
  'Basil, Mint',
  'Chile Powder, Cilantro',
];

var BOOSTERS = [
  'Tomato Paste',
  'Parmesan',
  'Preserved Lemon',
  'Lime Juice',
  'Miso Paste',
];

var INGREDIENTS = [
  PROTEINS,
  VEGETABLES,
  LIQUIDS,
  HERBS,
  BOOSTERS
];

var RECIPE;


/* Plucks a random item from an ingredient array and pushes it to the contant RECIPE.
 * param {!Array} arr The input array which we will pick the first item.
 */
function getIngredients(arr) {
  RECIPE = [];
  var l = arr.length;
  var current_ingredient;
  for (var i = 0; i < l; i++) {
    current_ingredient = arr[i][~~(Math.random() * arr[i].length)];
    RECIPE.push(current_ingredient);
  }
}


/* Writes each recipe to the DOM in the appropriate <span>.
 * param {!Array} recipeArray The complete recipe array with unique ingredients.
 */
function renderRecipe(recipeArray) {
  document.getElementById("meat").innerHTML = recipeArray[0];
  document.getElementById("vegetables").innerHTML = recipeArray[1];
  document.getElementById("liquid").innerHTML = recipeArray[2];
  document.getElementById("herbs").innerHTML = recipeArray[3];
  document.getElementById("booster").innerHTML = recipeArray[4];
}

document.getElementById("recipe-shuffler").addEventListener('click', function() {
  getIngredients(INGREDIENTS);
  renderRecipe(RECIPE);
}, false);

getIngredients(INGREDIENTS);
renderRecipe(RECIPE);
