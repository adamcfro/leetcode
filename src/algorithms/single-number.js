/**
 * Given a non-empty array of integers, nums, where every element appears
 * twice except for one, returns that single element.
 * 
 * @param {number[]} nums - A non-empty array of integers
 * @returns {number} - Returns the element that appears only once
 */
function singleNumber (nums) {
  let numCount = {};
  for (let i = 0; i < nums.length; i++) {
    numCount[nums[i]] = (numCount[nums[i]] || 0) + 1;
  }
  for (const key in numCount) {
    if (numCount[key] === 1) {
      return Number(key);
    }
  }
}