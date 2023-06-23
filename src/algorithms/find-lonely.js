/**
 * Given an integer array nums, returns all lonely numbers in nums. Results can 
 * be returned in any order.
 * 
 * A number is lonely when it appears only once, and no adjacent numbers 
 * (i.e. x + 1 and x - 1) appear in the array.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of lonely numbers
 */
function findLonely (nums) {
  let res = [];
  let numSet = new Set(nums);
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  for (const [key, val] of Object.entries(map)) {
    if (val === 1) {
      if (!numSet.has(Number(key) - 1) && !numSet.has(Number(key) + 1)) {
        res.push(Number(key));
      }
    }
  }
  return res;
}