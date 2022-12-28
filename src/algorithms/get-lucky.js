/**
 * Given a string s consisting of lowercase English letters and an integer k,
 * first, converts s into an integer by replacing each letter with its position
 * in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26).
 * Then, transforms the integer by replacing it with the sum of its digits.
 * Repeats the transform operation k times in total.
 * 
 * Returns the resulting number after performing the operations described above.
 * 
 * @param {string} s - A string of lowercase English characters
 * @param {number} k - Number of times to perform transformation process
 * @returns {number} - Returns the resulting number
 */
function getLucky (s, k) {
  let res = 0;
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    temp += String(s.charCodeAt(i) - 96);
  }
  for (let j = 0; j < k; j++) {
    res = 0;
    for (let l = 0; l < temp.length; l++) {
      res += Number(temp[l]);
    }
    temp = String(res);
  }
  return res;
}