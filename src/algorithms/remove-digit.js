/**
 * Given a string number representing a positive integer and a character digit,
 * returns the resulting string after removing exactly one occurrence of digit
 * from number such that the value of the resulting string in decimal form is
 * maximized.
 * 
 * @param {string} number - A string representing a positive number
 * @param {string} digit - A string representing a number digit
 * @returns {string} - Returns a maximized number in string format
 */
function removeDigit (number, digit) {
  let maxRes = '';
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let temp = number.slice(0, i) + number.slice(i + 1);
      if (maxRes === '' || temp > maxRes) {
        maxRes = temp;
      }
    }
  }
  maxRes = String(maxRes);
  return maxRes;
}