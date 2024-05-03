/**
 * Given an integer array nums where nums[i] is either a positive integer or
 * -1. We need to find for each -1 the respective positive integer, which we
 * call the last visited integer. To achieve this goal, let's define two empty
 * arrays: seen and ans.
 *
 * Start iterating from the beginning of the array nums.
 *   • If a positive integer is encountered, prepend it to the front of seen.
 *   • If -1 is encountered, let k be the number of consecutive -1s seen so far
 *     (including the current -1),
 *   • If k is less than or equal to the length of seen, append the k-th
 *     element of seen to ans.
 *   • If k is strictly greater than the length of seen, append -1 to ans.
 *
 * Return the array ans.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @return {number[]} - Returns an array the last visited integers
 */

function lastVisitedIntegers(nums) {
  const ans = [];
  const seen = [];
  let consecutive = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      seen.unshift(num);
      consecutive = 0;
    } else {
      if (seen.length <= consecutive) {
        ans.push(-1);
      } else {
        ans.push(seen[consecutive]);
      }
      consecutive++;
    }
  }
  return ans;
}
