/**
 * Given a balanced string s, returns the maximum number of balanced string
 * that can be obtained.
 * 
 * Balanced strings are those that have an equal quantity of 'L' and 'R'
 * characters.
 * 
 * @param {string} s - A string of uppercase 'L' and 'R' characters
 * @returns {number} - Returns a count of balanced strings
 */
function balancedStringSplit (s) {
  let res = 0;
  let leftCount = 0;
  let rightCount = 0;
  for (const char of s) {
    if (char === 'L') {
      leftCount++;
    } else {
      rightCount++;
    }
    if (leftCount === rightCount) {
      res++;
    }
  }
  return res;
}