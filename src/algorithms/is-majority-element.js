/**
 * Returns true if target is a majority element in an array, or false otherwise.
 * 
 * A majority element in an array nums is an element that appears more than
 * nums.length / 2 times in the array.
 * 
 * @param {number[]} nums - An array of numbers sorted in increasing order
 * @param {number} target - A number to check the number of occurrences
 * @returns {boolean} - Returns true if target is the majority element
 */
function isMajorityElement (nums, target) {
  let count = 0;
  let index = nums.indexOf(target);
  for (let i = index; nums[i] === target; i++) {
    count++;
  }
  return count > Math.floor(nums.length / 2);
}