/**
 * Given a 0-indexed string array words and a boolean function
 * isPrefixAndSuffix that takes two strings, str1 and str2:
 *   • isPrefixAndSuffix(str1, str2) returns true if str1 is both a prefix and
 *     a suffix of str2, and false otherwise.
 * For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a
 * prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is
 * false.
 *
 * Returns an integer denoting the number of index pairs (i, j) such that
 * i < j, and isPrefixAndSuffix(words[i], words[j]) is true.
 *
 * @format
 * @param {string[]} words - An array of strings of lowercase English letters
 * @returns {number} - Returns a count of index pairs where str1 is both a
 *     prefix and suffix of str2
 */

function countPrefixSuffixPairs(words) {
  let count = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const len = words[i].length;
      const prefix = words[j].slice(0, len);
      const suffix = words[j].slice(words[j].length - len);
      if (prefix === words[i] && suffix === words[i]) {
        count++;
      }
    }
  }
  return count;
}
