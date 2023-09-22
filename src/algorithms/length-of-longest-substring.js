/**
 * Given a string s, returns the length of the longest substring without
 * repeating characters.
 * 
 * @param {string} s - A string of English letters, digits, symbols and spaces
 * @returns {number} - Returns the length of the longest substring
 */
function lengthOfLongestSubstring (s) {
  let seen = new Set();
  let longestSubstring = 0;
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (!seen.has(s[j])) {
      seen.add(s[j]);
      j++;
      longestSubstring = Math.max(longestSubstring, j - i);
    } else {
      seen.delete(s[i]);
      i++;
    }
  }
  return longestSubstring;
}