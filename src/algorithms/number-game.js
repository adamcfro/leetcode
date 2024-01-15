/**
 * Alice and Bob decided to play a game where in every round Alice and Bob will
 * do one move. The rules of the game are as follows:
 *   • Every round, first Alice will remove the minimum element from nums, and
 *     then Bob does the same.
 *   • Now, first Bob will append the removed element in the array arr, and
 *     then Alice does the same.
 *   • The game continues until nums becomes empty.
 * Returns the resulting array arr.
 *
 * @format
 * @param {number[]} nums - An array of positive numbers
 * @returns {number[]} - Returns the resulting array from Alice and Bob's game
 */

function numberGame(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length) {
    const alice = nums[i];
    const bob = nums[i + 1];
    res.push(bob, alice);
    i += 2;
  }
  return res;
}
