/**
 * Given an array nums of even length, pairs up the elements of nums into
 * n / 2 pairs such that:
 *     • Each element of nums is in exactly one pair
 *     • The maximum pair sum is minimized.
 * Returns the minimized maximum pair sum after optimally pairing up the
 * elements.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the minimized maximum pair sum
 */
function minPairSum (nums) {
  let pairSums = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    pairSums.push(nums[i] + nums[j]);
  }
  return Math.max(...pairSums);
}