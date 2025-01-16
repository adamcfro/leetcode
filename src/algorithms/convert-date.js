/**
 * You are given a string date representing a Gregorian calendar date in the
 * yyyy-mm-dd format. The date can be written in its binary representation
 * obtained by converting year, month, and day to their binary representations
 * without any leading zeroes and writing them down in year-month-day format.
 * Return the binary representation of date.
 *
 * @format
 * @param {string} date - A string representation of a date.
 * @returns {string} - Returns a binary string representation of date.
 */

function convertDateToBinary(date) {
  let newDate = date.split("-");
  let year = String(parseInt(newDate[0]).toString(2));
  let month = String(parseInt(newDate[1]).toString(2));
  let day = String(parseInt(newDate[2]).toString(2));
  return `${year}-${month}-${day}`;
}
