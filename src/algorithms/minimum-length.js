/**
 * Given a string s consisting only of characters 'a', 'b', and 'c', applies 
 * the following algorithm on the string any number of times:
 *   • Picks a non-empty prefix from the string s where all the characters in 
 *     the prefix are equal.
 *   • Picks a non-empty suffix from the string s where all the characters in 
 *     this suffix are equal.
 *   • The prefix and the suffix should not intersect at any index.
 *   • The characters from the prefix and suffix must be the same.
 *   • Delete both the prefix and the suffix.
 * Returns the minimum length of s after performing the above operation any 
 * number of times (possibly zero times).
 * 
 * @param {string} s - A string consisting of the characters 'a', 'b', and 'c'
 * @returns {number} - Returns the length of the string after operations
 */
function minimumLength (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      break;
    } else {
      let temp = s[i];
      while (s[i] === temp) {
        i++;
      }
      while (s[j] === temp) {
        j--;
      }
    }
  }
  if (i > j) {
    return 0;
  } else {
    return j - i + 1;
  }
}