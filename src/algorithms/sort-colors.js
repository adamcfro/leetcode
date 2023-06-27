/**
 * Given an array nums with n objects colored red, white or blue, sorts the
 * array in place so that objects of the same color are adjacent to like colors.
 * 0, 1 and 2 are used to represent red, white and blue, respectively. Does not
 * use the library's built-in sort function.
 * 
 * @param {number[]} nums - An array of numbers representing colors
 * @returns {number[]} - Returns a sorted array
 */
function sortColors (nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;
  while (j <= k) {
    if (nums[j] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[j] === 1) {
      j++;
    } else {
      [nums[j], nums[k]] = [nums[k], nums[j]];
      k--;
    }
  }
  return nums;
}