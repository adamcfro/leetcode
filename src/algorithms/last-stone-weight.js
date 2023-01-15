/**
 * Takes in an array of integers stones where stones[i] is the weight of the ith
 * stone, and takes the heaviest two stones and smashes them together.
 *     • If x === y, both stones are destroyed.
 *     • If x !== y, the stone of weight x is destroyed, and the stone of
 *       weight y has new weight y - x.
 * At the end there is at most one stone left.
 * 
 * Returns the weight of the last remaining stone. If there are no stones left,
 * returns 0.
 * 
 * @param {number[]} stones - An array of numbers representing stone weights
 * @returns {number} - Returns the weight of the last remaining stone
 */
function lastStoneWeight (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => {
      return a - b;
    });
    if (stones[stones.length - 1] === stones[stones.length - 2]) {
      stones.splice(stones.length - 2, 2);
    } else {
      stones[stones.length - 1] -= stones[stones.length - 2];
      stones.splice(stones.length - 2, 1);
    }
  }
  return stones;
}