/**
 * Given a string s, returns true if a permutation of the string could form
 * a palindrome and false otherwise.
 * 
 * @param {string} s - A string of lowercase letters
 * @returns {boolean} - Returns true if a permutation can form a palindrome
 */
function canPermutePalindrome (s) {
  let count = {};
  let oddEntries = 0;
  let res = true;
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }
  for (const [key, val] of Object.entries(count)) {
    if (Object.keys(count).length === 1) {
      break;
    } 
    if (val % 2 !== 0) {
      oddEntries++;
    }
    if (oddEntries > 1) {
      res = false;
      break;
    }
  }
  return res;
}