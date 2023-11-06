const createCustomer = (name, bill, bookings=[]) => {
  const Customer = {
    name: name,
    bill: bill,
    bookings: bookings,
  }
  return Customer
}

const greeting = (customer) => {
  if (customer.bookings.length > 0) {
    return `${customer.name}! Welcome back to Happy Spa`
  }
  else {
    return `${customer.name}! Welcome to Happy Spa`
  }
}

const createService = (name, cost) => {
  if (name !== undefined && cost !== undefined){
    return { name: name, cost: cost }
  }
  else {
    return 'Please provide service name and cost.'
  }
}

const bookServices = (customer, service) => {
  customer.bookings.push(service.name)
  customer.bill += service.cost
  return customer
}

const applyGiftCard = (services, giftCardAmount) => {
  var affordableServices = services.filter((service) => giftCardAmount >= service.price)
  return affordableServices.map((service) => service.name)
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
