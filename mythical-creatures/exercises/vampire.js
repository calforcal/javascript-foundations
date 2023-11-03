const createVampire = (name, pet="bat") => {
  const Vampire = {
    name: name,
    pet: pet,
    get thirsty() {
      return this.ouncesDrank > 49 ? false : true;
    },
    ouncesDrank: 0,
  }
  return Vampire;
}

const encounterDeliciousVictim = (vampire) => {
  return vampire.thirsty ? "I WANT TO SUCK YOUR BLOOD!" : "No thanks, I am too full."
}

const drink = (vampire) => {
  if (vampire.thirsty) {
    vampire.ouncesDrank += 10;
  }
  return vampire;
}

const inquirePlace = (locations, place) => {
  return locations.includes(place) ? `Yes, I have spent some time in ${place}.` : `No, I have never been to ${place}.`
}

const findBatLovers = (vampires) => {
  bats = vampires.filter((vampire) => vampire.pet === "bat")
  return bats.map((vampire) => vampire.name)
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}