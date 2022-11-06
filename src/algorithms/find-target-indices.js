/**
 * Given an integer array nums and a target element target,
 * returns an array of the target indices of nums after sorting nums
 * in non-decreasing order. If there are no target indices,
 * returns an empty array.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} target - A target index where nums[i] === target
 * @returns {number[]} - Returns an array of indices
 */
function targetIndices (nums, target) {
  let targetArr = [];
  nums = nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      break;
    } else if (nums[i] === target) {
      targetArr.push(i);
    }
  }
  return targetArr;
}