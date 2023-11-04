const createIngredient = (name="unknown", price=0.00) => {
  const Ingredient = {
    name: name,
    price: price,
  }
  return Ingredient
}

const createTaco = (name="custom", ingredients=[]) => {
  const Taco = {
    name: name,
    ingredients: ingredients
  }
  return Taco
}

const addIngredientToTaco = (taco, ingredient=null) => {
  if (ingredient !== null) {
    taco.ingredients.push(ingredient)
  }
  return taco
}

const calculatePrice = (taco) => {
  sum = 0.00
  taco.ingredients.forEach((ingredient) => sum += ingredient.price)
  return sum
}

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice,
}
