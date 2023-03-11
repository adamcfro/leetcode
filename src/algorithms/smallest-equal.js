/**
 * Given an array nums, returns the smallest index of nums such that
 * index % 10 === nums[index]. Returns -1 if no such index exists.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns an index
 */
function smallestEqual (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i;
    }
  }
  return -1;
}