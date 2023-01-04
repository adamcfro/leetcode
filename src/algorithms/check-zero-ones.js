/**
 * Given a binary string s, returns true if the longest contiguous segment of
 * 1's is strictly longer than the longest contiguous segment of 0's in s,
 * or returns false otherwise.
 * 
 * @param {string} s - A string representation of a binary number
 * @returns {boolean} - Returns true if the longest segment of 1's is greater
 *     than the longest segment of 0's
 */
function checkZeroOnes (s) {
  let count = {0: 0, 1: 0};
  let temp = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      temp++;
    } else {
      if (temp > count[s[i]]) {
        count[s[i]] = temp;
      }
      temp = 1;
    }
  }
  return count[1] > count[0];
}