/**
 * Given an array of integers nums, returns the maximum value of two different
 * indices i and j, where the product is equal to (nums[i] - 1) * (nums[j] - 1).
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the maximum product of two elements
 */
function maxProduct (nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  return (nums[0] - 1) * (nums[1] - 1);
}