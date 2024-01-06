/**
 * There are n chips, where the position of the ith chip is position[i]. The
 * chips need to all be moved to the same position. In one step, changes
 * the position of the ith chip from position[i] to:
 *   • position[i] + 2 or position[i] - 2 with cost = 0.
 *   • position[i] + 1 or position[i] - 1 with cost = 1.
 * Returns the minimum cost needed to move all the chips to the same position.
 *
 * @format
 * @param {number[]} position - An array of numbers representing positions of
 *   chips
 * @returns {number} - Returns the number of steps to move all chips to the same
 *   position
 */

function minCostToMoveChips(position) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return Math.min(even, odd);
}
