const createElevator = (building, floors, currentFloor, passengers) => {
  const Elevator = {
    building: building,
    floors: floors,
    currentFloor: currentFloor,
    passengers: passengers
  }
  return Elevator
}

const changeFloors = (elevator, newFloor) => {
  if (elevator.currentFloor === newFloor) {
    return `You're already on floor ${newFloor}!`
  }
  else if (newFloor < 1 || newFloor > elevator.floors) {
    return `Floor ${newFloor} does not exist!`
  }
  else {
    elevator.currentFloor = newFloor
    return `Taking you to floor ${newFloor}!`
  }
}

const dropOffPassenger = (elevator, passenger) => {
  return elevator.passengers.filter((person) => person !== passenger)
}

module.exports = {
  createElevator,
  changeFloors,
  dropOffPassenger,
};
