/**
 * This function takes an integer n and an integer start, and defines an array
 * nums where nums[i] = start + 2 * i and n === nums.length. Returns the bitwise
 * XOR of all elements of nums.
 * 
 * @param {number} n - A number representing the length of the array
 * @param {number} start - A number to be added to each element in the array
 * @returns {number} - Returns the bitwise XOR of all elements of nums
 */
function xorOperation (n, start) {
  let res = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i);
    res ^= arr[i];
  }
  return res;
}