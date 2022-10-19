/**
 * Given a string jewels representing the types of stones that are jewels,
 * and a string stones where each character represents a stone you have,
 * returns the number of stones you have that are also jewels.
 * 
 * Letters are case sensitive.
 * 
 * @param {string} jewels - First string of letter characters
 * @param {string} stones - Second string of letter characters
 * @returns {number} - Returns a count of stones that are also stones
 */
function numJewelsInStones (jewels, stones) {
  let count = 0;
  let jewelTypes = {};
  for (let i = 0; i < jewels.length; i++) {
    jewelTypes[jewels[i]] = (jewelTypes[jewels[i]] || 0) + 1;
  }
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] in jewelTypes) {
      count++;
    }
  }
  return count;
}