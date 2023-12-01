/**
 * Given a 0-indexed integer array nums and an integer k, returns an integer
 * that denotes the sum of elements in nums whose corresponding indices have
 * exactly k set bits in their binary representation. The set bits in an
 * integer are the 1's present when it is written in binary.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} k - A target number
 * @returns - Returns the sum of elements with indices that have k bits in their
 *     binary representation
 */

function sumIndicesWithKSetBits(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let bin = i;
    let count = 0;
    while (bin !== 0) {
      if (bin & 1) {
        count++;
      }
      bin >>= 1;
    }
    if (count === k) {
      sum += nums[i];
    }
  }
  return sum;
}
