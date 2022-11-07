/**
 * Given an array nums, returns a new array where for each nums[i], a count is 
 * given of how many numbers in the array are smaller than it.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns a new array of numbers
 */
function smallerNumbersThanCurrent (nums) {
  let map = {};
  let numsClone = [...nums].sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < numsClone.length; i++) {
    if (!map.hasOwnProperty(numsClone[i])) {
      map[numsClone[i]] = i;
    }
  }
  for (let i = 0; i < numsClone.length; i++) {
    numsClone[i] = map[nums[i]];
  }
  return numsClone;
}