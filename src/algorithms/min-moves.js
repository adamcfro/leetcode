/**
 * Given an integer array nums of size n, returns the minimum number of moves
 * required to make all array elements equal.
 * 
 * In one move, increments n - 1 elements of the array by 1.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of moves to make all elements equal.
 */
function minMoves (nums) {
  let moves = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = nums.length - 1; i >= 0; i--) {
    moves += nums[i] - nums[0];
  }
  return moves;
}