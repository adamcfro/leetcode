/**
 * You are given two strings s and t such that every character occurs at most
 * once in s and t is a permutation of s. The permutation difference between s
 * and t is defined as the sum of the absolute difference between the index of
 * the occurrence of each character in s and the index of the occurrence of the
 * same character in t.
 *
 * Return the permutation difference between s and t.
 *
 * @format
 * @param {string} s - A string of lowercase English letters
 * @param {string} t - A string of lowercase English letters
 * @returns {number} - Returns the permutation difference between s and t
 */

function findPermutationDifference(s, t) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (i !== j && s[i] === t[j]) {
        res += Math.abs(i - j);
      }
    }
  }
  return res;
}
