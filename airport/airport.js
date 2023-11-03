const createAirport = (name, airlines, availableGates) => {
  const Airport = {
    name: name,
    airlines: airlines,
    availableGates: availableGates,
    overflow: 0,
    get message() {
      if (this.overflow > 0){
        return `Oh no! Not enough gates available. Current overflow is ${this.overflow}.`
      } else {
        return `Success! Current availability is ${this.availableGates}.`
      }
    }
  }
  return Airport
}

const welcomeGuests = (airport) => {
  return `Welcome to ${airport.name}!`
}

const landPlanes = (airport, numLanded) => {
  airport.availableGates -= numLanded
  if (airport.availableGates < 0) {
    airport.overflow = Math.abs(airport.availableGates)
    airport.availableGates = 0
  }
  return airport
}

const checkAirlineLocations = (airports, airline) => {
  airports = airports.filter((airport) => airport.airlines.includes(airline))
  return airports.map((airport) => airport.name)
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
