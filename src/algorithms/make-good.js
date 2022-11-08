/**
 * Given a string s of lower and upper case English letters, a good string is a
 * string which doesn't have two adjacent characters where s[i] is a lowercase
 * letter and s[i + 1] is the same letter but in uppercase or vice-versa.
 * To make the string good, targets the two adjacent characters that make the 
 * string bad and removes them. Repeats this process until the string becomes
 * good. An empty string is also good.
 * 
 * Returns the string after making it good.
 * 
 * @param {string} s - A string of uppercase and lowercase English letters
 * @returns {string} - Returns a modified string
 */
function makeGood (s) {
  let i = 0;
  while (i <= s.length - 2) {
    if (s[i] !== s[i + 1] && s[i].toLowerCase() === s[i + 1].toLowerCase()) {
      s = s.substring(0, i) + s.substring(i + 2);
      i = 0;
    } else {
      i++;
    }
  }
  return s;
}