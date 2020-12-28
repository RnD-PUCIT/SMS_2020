const calendar = {
  days: [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
  ],
  weeks: [
    { id: 1, name: 'Week 01' },
    { id: 2, name: 'Week 02' },
    { id: 3, name: 'Week 03' },
    { id: 4, name: 'Week 04' },
    { id: 5, name: 'Week 05' },
  ],
  months: [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'September' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' },
  ],
};

export function getDays() {
  return calendar.days;
}

export function getMonths() {
  return calendar.months;
}

export function getWeeks() {
  return calendar.weeks;
}
