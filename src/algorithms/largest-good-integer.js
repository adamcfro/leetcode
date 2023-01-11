/**
 * Given a string num representing a large integer, returns the maximum 
 * substring of length 3 that exists in the string, or returns an empty string
 * if no such substring exists.
 * 
 * @param {string} num - A string representation of a number
 * @returns {string} - Returns the largest substring of length 3
 */
function largestGoodInteger (num) {
  let res = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      if (res === '' || Number(num.substring(i, i + 3)) > Number(res)) {
        res = num.substring(i, i + 3);
      }
    }
  }
  return res;
}