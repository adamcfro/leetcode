/**
 * Given an integer array nums, returns 1 if the product of the array is
 * positive, returns -1 if the product is negative, or returns 0 if the product
 * is equal to 0;
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a number signifying that the product of the array
 *     is either positive (1), negative (-1), or equal to 0 (0);
 */
function arraySign (nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  let res;
  if (product > 0) {
    res = 1;
  } else if (product < 0) {
    res = -1;
  } else {
    res = 0;
  }
  return res;
}