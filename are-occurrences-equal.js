/**
 * Given a string s, returns true if all characters that appear in s
 * have the same number of occurrences.
 * 
 * @param {string} s - A string of characters
 * @returns {boolean} - Returns true if all chars in s occur the same amount
 */
function areOccurrencesEqual (s) {
  const charCount = {};
  let comparisonNum = 0;
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    if (i + 1 === s.length) {
      comparisonNum = charCount[s[i]];
    }
  }
  for (const [key, value] of Object.entries(charCount)) {
    if (value !== comparisonNum) {
      return false;
    }
  }
  return true;
}