const createMeal = (name, specialRequests, tableNumber) => {
  const Meal = {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
    complete: false,
  }
  return Meal
}

const getMade = (meal) => {
  meal.complete = true
  return meal
}

const announceMeal = (meal) => {
  if (meal.complete) {
    return `Order up - ${meal.name} for table ${meal.tableNumber}!`
  }
  else {
    return `This ${meal.name} is not completed yet`
  }
}

const createOrder = (order) => {
  const Order = {
    tableNumber: order.name,
    meals: order.meals,
    completedMeals: []
  }
  return Order
}

const cookMeal = (order, meal) => {
  order.meals.forEach((orderMeal) => {
    meal.tableNumber !== order.tableNumber
    if (meal.tableNumber === order.tableNumber && orderMeal.name === meal.name) {
      orderMeal.complete = true
      order.completedMeals.push(orderMeal.name)
    }
  })
  return order
}

const listOrders = (order) => {
  return order.meals.map((orderMeal) => orderMeal.name)
}

const listSpecialRequests = (order) => {
  return order.meals.map((orderMeal) => orderMeal.specialRequests).flat()
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
