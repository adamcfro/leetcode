/**
 * Given an array nums of size n, returns the majority element.
 * 
 * The majority element is the element that appears more than [n / 2] times.
 * You may assume that the majority element always exists in the array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the majority element
 */
function majorityElement (nums) {
  let numCount = {};
  for (let i = 0; i < nums.length; i++) {
    numCount[nums[i]] = (numCount[nums[i]] || 0) + 1;
  }
  for (const num in numCount) {
    if (numCount[num] > nums.length / 2) {
      return Number(num);
    }
  }
}