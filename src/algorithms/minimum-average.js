/**
 * You have an array of floating point numbers averages which is initially
 * empty. You are given an array nums of n integers where n is even. You repeat
 * the following procedure n / 2 times:
 *   • Remove the smallest element, minElement, and the largest element
 *     maxElement, from nums.
 *   • Add (minElement + maxElement) / 2 to averages.
 * Return the minimum element in averages.
 *
 * @format
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} - Returns the minimum element from the resulting array.
 */

function minimumAverage(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    res.push((nums[left] + nums[right]) / 2);
    left++;
    right--;
  }
  return Math.min(...res);
}
