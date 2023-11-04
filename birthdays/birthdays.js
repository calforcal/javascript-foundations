const createBirthday = (name, month, day) => {
  const Birthday = {
    name: name,
    month: month,
    day: day
  }
  return Birthday
}

const celebrateBirthday = (birthday) => {
  return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

const countBirthdays = (birthdays, month) => {
  return birthdays.filter((birthday) => birthday.month === month).length
}

module.exports = {
  createBirthday,
  celebrateBirthday,
  countBirthdays,
};