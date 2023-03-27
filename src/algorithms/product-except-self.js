/**
 * Given an integer array nums, returns an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 * 
 * This algorithm does not use the division operation.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of numbers where each number is equal
 *     to the product of all the elements of nums except nums[i]
 */
function productExceptSelf (nums) {
  let answer = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    answer.push(product);
    product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= product;
    product *= nums[i];
  }
  return answer;
}