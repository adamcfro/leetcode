/**
 * Given an array o digit strings nums and a digit string target, returns the
 * number of pairs of indices [i, j] (where i !== j), such that the 
 * concatenation of nums[i] + nums[j] equals target.
 * 
 * @param {string[]} nums - An array of digit strings
 * @param {string} target - A target number for strings to concatenate to
 * @returns {number} - Returns a count of pairs in nums that equal target
 */
function numOfPairs (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <  nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        count++;
      }
    }
  }
  return count;
}