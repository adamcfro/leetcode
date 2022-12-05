/**
 * Given an integer array colors of length n, where colors[i] represents the
 * color of the ith house, returns the maximum distance between two houses
 * with different colors.
 * 
 * The distance between the ith and jth houses is abs(i - j), where abs(x)
 * is the absolute value of x.
 * 
 * @param {number[]} colors - An array of numbers representing house colors
 * @returns {number} - Returns the max distance of houses with different colors
 */
function maxDistance (colors) {
  let distance = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = colors.length - 1; j > i; j--) {
      let currentDistance = Math.abs(i - j);
      if (colors[i] !== colors[j] && currentDistance > distance) {
        distance = currentDistance;
      }
    }
  }
  return distance;
}