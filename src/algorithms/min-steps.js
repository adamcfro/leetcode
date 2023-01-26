/**
 * Returns the minimum number of steps to make t an anagram of s. In one step
 * any character of t can be replaced with another character.
 * 
 * An anagram of a string is a string that contains the same characters with a
 * different (or the same) ordering.
 * 
 * @param {string} s - First string parameter of lowercase English letters
 * @param {string} t - Second string parameter of lowercase English letters
 * @returns {number} - Returns a count of steps to convert t to a palindrome
 */
function minSteps (s, t) {
  let res = 0
  let j = 0;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1;
  }
  while (j < s.length) {
    if (hash.hasOwnProperty(t[j])) {
      if (hash[t[j]] !== 0) {
        hash[t[j]] -= 1;
        if (hash[t[j]] === 0) {
          delete hash[t[j]];
        }
      }
    } else {
      res++;
    }
    j++;
  }
  return res;
}