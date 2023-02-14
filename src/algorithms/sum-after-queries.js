/**
 * Given an integer array nums and another array queries where 
 * queries[i] = [valᵢ, indexᵢ], for each query i, performs two operations:
 *     • nums[indexᵢ] = nums[indexᵢ] + valᵢ. 
 *     • adds the sum of the even values of nums to res[].
 * Returns an integer array res where res[i] is the answer to the ith query.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number[][]} queries - An array of numbers arrays
 * @returns {number[]} - Returns an array of sums
 */
function sumEvenAfterQueries (nums, queries) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    nums[queries[i][1]] = nums[queries[i][1]] + queries[i][0]
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % 2 === 0) {
        sum += nums[j];
      }
    }
    res.push(sum);
  }
  return res;
}