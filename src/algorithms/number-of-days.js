/**
 * Given a year and a month, returns the number of days of that month.
 * 
 * @param {number} year - A number representing a year
 * @param {number} month - A number representing a month
 * @returns {number} - Returns the number of days in a month depending on year
 */
function numberOfDays (year, month) {
  let res;
  const days = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month !== 2) {
    res = days[month - 1];
  } else {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        res = 29;
      } else {
        res = 28;
      }
    } else {
      if (year % 4 === 0) {
        res = 29;
      } else {
        res = 28;
      }
    }
  }
  return res;
}