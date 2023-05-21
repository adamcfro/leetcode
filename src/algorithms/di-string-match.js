/**
 * A permutation perm of n + 1 integers of all the integers in the range [0, n] 
 * can be represented as a string s of length n where:
 *     • s[i] == 'I' if perm[i] < perm[i + 1], and
 *     • s[i] == 'D' if perm[i] > perm[i + 1].
 * Given a string s, reconstruct the permutation perm and return it. If there 
 * are multiple valid permutations perm, return any of them.
 * 
 * @param {string} s - A string consisting of uppercase letters 'I' and 'D'
 * @returns {number[]} - Returns a permutation of integers in the range [0, n]
 */
function diStringMatch (s) {
  let res = [];
  let i = 0;
  let j = s.length;
  for (let k = 0; k < s.length; k++) {
    if (s[k] === 'I') {
      res.push(i);
      i++;
    } else if (s[k] === 'D') {
      res.push(j);
      j--;
    }
  }
  res.push(i);
  return res;
}