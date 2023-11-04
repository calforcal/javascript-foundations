const createItemStock = (name="unknown", quantity=0, price=1.00) => {
  const Item = {
    name: name,
    quantity: quantity,
    price: price,
  }
  return Item
}

const makePurchase = (item, moneyGiven) => {
  if (item.price > moneyGiven) {
    return `Sorry, you need at least $${Math.round(item.price)} to make that purchase`
  }
  else if (item.quantity <= 0) {
    return `Sorry, there are none left`
  }
  else {
    return `Here are your ${item.name}`
  }
}

const collectChange = (changeGiven) => {
  let sum = 0.0
  changeGiven.forEach((coin) => sum += coin)
  return sum
}

module.exports = {
  createItemStock,
  makePurchase,
  collectChange,
}
