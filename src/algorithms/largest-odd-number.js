/**
 * Given a string num representing a large integer, returns the largest-valued
 * odd integer (as a string) that is a non-empty substring of num, or returns
 * an empty string if no odd integer exists.
 * 
 * @param {string} num - A string representation of a number
 * @returns {string} - Returns a string of numbers or an empty string
 */
function largestOddNumber (num) {
  while (num.length > 0) {
    const lastNum = num[num.length - 1];
    if (Number(lastNum) % 2 === 1) {
      return num;
    } else {
      num = num.slice(0, num.length - 1);
    }
  }
  return '';
}