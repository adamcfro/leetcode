/**
 * Given a date string in the form DAY MONTH YEAR, where:
 *     • Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"
 *     • Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
 *       "Aug", "Sep", "Oct", "Nov", "Dec"}.
 *     • Year is in the range [1900, 2100].
 * Convert the date string to the format YYYY-MM-DD, where:
 *     • YYYY denotes the 4 digit year.
 *     • MM denotes the 2 digit month.
 *     • DD denotes the 2 digit day.
 * 
 * @param {string} date - A string representation of a date
 * @returns {string} - Returns a modified string representing a date
 */
function reformatDate (date) {
  let res = '';
  let months = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
  };
  date = date.split(' ');
  date[0] = date[0].slice(0, date[0].length - 2);
  if (Number(date[0]) < 10) {
    date[0] = '0' + date[0];
  }
  if (months[date[1]] < 10) {
    months[date[1]] = '0' + months[date[1]];
  }
  for (let i = date.length - 1; i >= 0; i--) {
    if (i === 1) {
      res += months[date[i]];
    } else {
      res += date[i];
    }
    if (i > 0) {
      res += '-';
    }
  }
  return res;
}