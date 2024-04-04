/**
 * Given a 0-indexed integer array nums whose length is a power of 2, applies
 * the following algorithm on nums:
 *   • Let n be the length of nums. If n == 1, end the process. Otherwise,
 *     create a new 0-indexed integer array newNums of length n / 2.
 *   • For every even index i where 0 <= i < n / 2, assign the value of
 *     newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
 *   • For every odd index i where 0 <= i < n / 2, assign the value of
 *     newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
 *   • Replace the array nums with newNums.
 *   • Repeat the entire process starting from step 1.
 * Returns the last number that remains in nums after applying the algorithm.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns the remaining number from nums
 */

function minMaxgame(nums) {
  while (nums.length > 1) {
    let temp = [];
    let evenIndex = true;
    for (let i = 0; i < nums.length; i += 2) {
      if (evenIndex) {
        temp.push(Math.min(nums[i], nums[i + 1]));
        evenIndex = false;
      } else {
        temp.push(Math.max(nums[i], nums[i + 1]));
        evenIndex = true;
      }
    }
    nums = temp;
  }
  return nums[0];
}
