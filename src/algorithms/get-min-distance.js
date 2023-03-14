/**
 * Given an integer array nums and two integers target and start, finds an index
 * such that nums[i] === target and Math.abs(i - start) is minimized.
 * 
 * Returns Math.abs(i - start);
 * 
 * @param {number[]} nums 
 * @param {*} target 
 * @param {*} start 
 * @returns 
 */
function getMinDistance (nums, target, start) {
  let minDistance = Math.max(...nums);
  let index = minDistance;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      index = i;
      minDistance = Math.min(minDistance, Math.abs(index - start));
    }
  }
  return minDistance;
}