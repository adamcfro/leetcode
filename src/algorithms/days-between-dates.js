/**
 * Counts and returns the number of days between two dates.
 *
 * The two dates are given as strings, their format is YYYY-MM-DD.
 *
 * @format
 * @param {string} date1 - A string representing the first date
 * @param {string} date2 - A string representing the second date
 * @returns {number} - A number representing how many days between dates
 */

function daysBetweenDates(date1, date2) {
  const milliseconds = 1000 * 60 * 60 * 24;
  return Math.abs(
    (new Date(date1).getTime() - new Date(date2).getTime()) / milliseconds
  );
}
