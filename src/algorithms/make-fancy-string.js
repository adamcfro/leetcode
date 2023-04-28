/**
 * Given a string s, deletes the minimum possible number of characters from s
 * to make it fancy. A fancy string is a string where no three consecutive
 * characters are equal. Returns the final string after the deletions.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {string} - Returns a new string
 */
function makeFancyString (s) {
  let str = s[0];
  let previous = s[0];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    let current = s[i];
    if (current === previous) {
      count++;
    } else {
      count = 1;
      previous = current;
    }
    if (count < 3) {
      str += current;
    }
  }
  return str;
}