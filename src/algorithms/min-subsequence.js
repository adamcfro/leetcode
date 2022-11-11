/**
 * Given an array of numbers, returns a subsequence of the array whose sum of
 * elements is strictly greater than the sum of the non-included elements of
 * the array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of numbers whose sum is greater than
 *     the non-included numbers of the parameter array
 */
function minSubsequence (nums) {
  let res = [];
  let subSum = 0;
  let numSum = nums.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  nums.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < nums.length; i++) {
    subSum += nums[i];
    if ((numSum - subSum) < (numSum / 2)) {
      for (let j = 0; j <= i; j++) {
        res.push(nums[j]);
      }
      break;
    }
  }
  return res;
}