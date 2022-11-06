/**
 * Given an integer array nums, returns the array after moving all the even
 * integers to the beginning of the array and all the odd integers to the back.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns the modified array
 */
function sortArrayByParity (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] % 2 === 1) {
      if (nums[j] % 2 === 0) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }
  return nums;
}