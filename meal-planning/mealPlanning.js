const createMeal = (type, calorieGoal) => {
  const Meal = {
    type: type,
    calorieGoal: calorieGoal,
    dishes: []
  }
  return Meal
}

const addDish = (meal, dish) => {
  if (meal.calorieGoal > dish.calories) {
    meal.calorieGoal -= dish.calories
    meal.dishes.push(dish)
  }
  return meal
}

const calculateCalories = (meal) => {
  var totalCals = meal.dishes.reduce((total, dish) => total + dish.calories, 0)
  return `${meal.type} has a total of ${totalCals} calories.`
}

module.exports = {
  createMeal,
  addDish,
  calculateCalories,
}