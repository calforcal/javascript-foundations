const createHobbit = (name='unknown', age=0) => {
  const Hobbit = {
    name: name,
    age: age,
    acquaintances: [],
    get isAdult() {
      return this.age > 32 ? true : false
    },
    get isOld() {
      return this.age > 100 ? true : false
    },
  }

  return Hobbit
}

const celebrateBirthday = (hobbit) => {
  hobbit.age += 1
  return hobbit
}

const getRing = (hobbit) => {
  if (hobbit.name.toLowerCase() === "frodo") {
    return "Here is the ring!"
  } else {
    return "You can't have it!"
  }
}

const meetPeople = (hobbit, people) => {
  people.forEach((person) => hobbit.acquaintances.push(person));
  return hobbit
}

const findFriends = (hobbit) => {
  friends = hobbit.acquaintances.filter((person) => person.relationship === "friend");
  return friends.map((friend) => friend.name);
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}