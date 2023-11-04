const createEvent = (title, month, day) => {
  if (day > 31 || day < 1) {
    return `Error: ${day} is not a valid day`
  }
  const Event = {
    title: title,
    month: month,
    day: day,
  }
  return Event
}

const createCalendar = (owner, events) => {
  const Calendar = {
    owner: owner,
    events: events,
  }
  return Calendar
}

const reportMonthlyEvents = (calendar, month) => {
  monthsEvents = calendar.events.filter((event) => event.month === month)
  return monthsEvents
}

module.exports = {
  createEvent,
  createCalendar,
  reportMonthlyEvents,
};