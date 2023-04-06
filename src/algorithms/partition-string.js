/**
 * Given a string s, partitions the string into one or more substrings such that
 * the characters in each substring are unique, and returns the minimum number
 * of substrings in such a partition.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns a count of the minimal partitions of s
 */
function partitionString (s) {
  let count = 0;
  let uniqueChars = new Set();
  for (const char of s) {
    if (uniqueChars.has(char)) {
      count++;
      uniqueChars.clear();
      uniqueChars.add(char);
    } else {
      uniqueChars.add(char);
    }
  }
  if (uniqueChars.size > 0) {
    count++;
  }
  return count;
}