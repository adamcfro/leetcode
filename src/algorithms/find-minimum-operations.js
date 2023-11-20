/**
 * You are given three strings s1, s2, and s3. You have to perform the
 * following operation on these three strings as many times as you want.
 *
 * In one operation you can choose one of these three strings such that its
 * length is at least 2 and delete the rightmost character of it.
 *
 * Returns the minimum number of operations you need to perform to make the
 * three strings equal if there is a way to make them equal, otherwise, returns
 * -1.
 *
 * @format
 * @param {string} s1 - A string of lowercase English letters
 * @param {string} s2 - A string of lowercase English letters
 * @param {string} s3 - A string of lowercase English letters
 * @returns {number} - Returns the minimum number of operations needed to make
 *     the three strings equal or returns -1 if that isn't possible
 */

function findMinimumOperations(s1, s2, s3) {
  const len = Math.min(s1.length, s2.length, s3.length);
  let i = 0;
  while (i < len) {
    if (s1[i] !== s2[i] || s1[i] !== s3[i]) {
      break;
    }
    i++;
  }
  if (i === 0) {
    return -1;
  }
  return s1.length + s2.length + s3.length - 3 * i;
}
