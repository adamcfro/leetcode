/**
 * Given an integer array nums, a reducer function fn, and an initial value
 * init, reduces an array and returns the final value of val. If the length of 
 * the array is 0, it should return init.
 * 
 * A reduced array is created by applying the following operation: val = fn
 * (init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until 
 * every element in the array has been processed. The final value of val is
 * returned.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {Function} fn - A reducer function
 * @param {number} init - An intital value
 * @returns {number} - Returns a number
 */
function arrayReduce (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
}