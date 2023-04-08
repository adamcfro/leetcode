/**
 * Given two strings s and t, where any character can be appended to either s 
 * or t in one step, returns the minimum number of steps to make s and t 
 * anagrams of each other.
 * 
 * @param {string} s - First string of lowercase English letters
 * @param {string} t - Second string of lowercase English letters
 * @returns {number} - Returns a count of steps to make s and t anagrams
 */
function minSteps (s, t) {
  let count = 0;
  let charCount = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of t) {
    if (charCount.hasOwnProperty(char)) {
      charCount[char] -= 1;
      if (charCount[char] === 0) {
        delete charCount[char];
      }
    } else {
      count++;
    }
  }
  for (const key of Object.keys(charCount)) {
    count += charCount[key];
  }
  return count;
}