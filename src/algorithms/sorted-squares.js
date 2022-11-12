/**
 * Given an integer array nums sorted in ascending order, returns an array of
 * the squares of each number sorted in ascending order.
 * 
 * @param {number[]} nums - An array of numbers sorted in ascending order
 * @returns {number[]} - Returns an array of numbers sorted in ascending order
 */
function sortedSquares (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }
  nums.sort((a, b) => {
    return a - b;
  });
  return nums;
}