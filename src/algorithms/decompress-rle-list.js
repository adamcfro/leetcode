/**
 * Given a list nums of integers representing a list compressed with 
 * run-length encoding, consider each adjacent pair of elements:
 *     • [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  
 * For each such pair, there are freq elements with value val concatenated in a 
 * sublist. Concatenates all the sublists from left to right to generate the 
 * decompressed list.
 * 
 * Returns the decompressed list.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns a new array representing a decompressed list
 */
function decompressRLElist (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i += 2) {
    let j = 0;
    while (j < nums[i]) {
      res.push(nums[i + 1]);
      j++;
    }
  }
  return res;
}