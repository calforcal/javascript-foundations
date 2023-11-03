const createDragon = (name, rider, temperment) => {
  const Dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true,
  }

  return Dragon
}

const greetRider = (dragon) => {
  return `Hi, ${dragon.rider}!`
}

const eat = (dragon) => {
  dragon.timesEaten += 1
  dragon.timesEaten >= 3 ? dragon.hungry = false : dragon.hungry = true
  return dragon
}

const findFireBreathers = (dragons) => {
  return dragons.filter((dragon) => dragon.temperment === "aggressive");
}

module.exports = {
  createDragon, 
  greetRider, 
  eat,
  findFireBreathers
}