/**
 * Given an alphanumeric string s, returns the second largest numerical digit
 * that appears in s, or -1 if it does not exist.
 * 
 * @param {string} s - An string of lowercase English letters and digits
 * @returns {number} - Returns the second largest number in s
 */
function secondHighest (s) {
  let nums = [];
  for (const char of s) {
    if (!isNaN(char)) {
      nums.push(Number(char));
    }
  }
  nums.sort((a, b) => {
    return b - a;
  });
  let highest = nums[0];
  for (const num of nums) {
    if (num !== highest) {
      return num;
    }
  }
  return -1;
}