/**
 * Given a string s, returns the number of '*' in s, excluding the '*' between
 * each pair of '|'.
 * 
 * Every two consecutive vertical bars '|' are grouped into pairs and
 * each '|' will belong to exactly one pair.
 * 
 * @param {string} s - A string parameter
 * @returns {number} - Returns a count of eligible asterisks found in s
 */
function countAsterisks (s) {
  let count = 0;
  let barPairs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      if (barPairs % 2 === 0) {
        count++;
      }
    } else if (s[i] === '|') {
      barPairs++;
    }
  }
  return count;
}