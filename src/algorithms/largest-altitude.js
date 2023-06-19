/**
 * Given an integer array gain of length n where gain[i] is the net gain in 
 * altitude between points i​​​​​​ and i + 1 for all (0 <= i < n), returns the 
 * highest altitude of a point.
 * 
 * @param {number[]} gain - A number array representing altitude changes
 * @returns {number} - Returns the highest altitude of a point
 */
function largestAltitude (gain) {
  let maxAltitude = 0;
  let current = 0;
  for (const num of gain) {
    current += num;
    maxAltitude = Math.max(current, maxAltitude);
  }
  return maxAltitude;
}