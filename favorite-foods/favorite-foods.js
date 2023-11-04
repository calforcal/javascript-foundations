const createFavoriteFood = (food) => {
  const Food = {
    name: food.dish,
    ingredients: food.ingredients,
    isSpicy: food.isSpicy,
    timesOrdered: 0,
  }
  return Food;
}

const commentOnSpiciness = (food) => {
  if (food.isSpicy) {
    return `Wow, this ${food.name} is so spicy!`
  } else {
    return `Phew, this ${food.name} is not very spicy.`
  }
}

const orderFood = (food) => {
  food.timesOrdered += 1
  return food
}

const createShoppingList = (foods) => {
  const all_ingredients = []
  foods.forEach((food) => all_ingredients.push(food.ingredients))
  return all_ingredients.flat()
}

module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList,
};