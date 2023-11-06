const createBarber = (name, earnings=0, haircuts=[]) => {
  const Barber = {
    name: name,
    earnings: earnings,
    haircuts: haircuts
  }
  return Barber
}

const giveCompliment = (haircut) => {
  return `This ${haircut.style} looks great!`
}

const cutHair = (barber, haircut) => {
  barber.haircuts.push(haircut)
  barber.earnings += haircut.price
  return barber
}

const listStyles = (barber, styleWanted) => {
  var styles = barber.haircuts.filter((cut) => cut.hairLength === styleWanted)
  return styles.map((cut) => cut.style)
}

module.exports = {
  createBarber,
  giveCompliment,
  cutHair,
  listStyles,
};