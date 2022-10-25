/**
 * Given an integer array gain where gain[i] is the net gain in altitude
 * between points i and i + 1, returns the highest altitude of a point
 * when the initial starting altitude is 0.
 * 
 * @param {number[]} gain - An array of numbers
 * @returns {number} - Returns the max altitude reached
 */
function largestAltitude (gain) {
  let maxAltitude = 0;
  let currentAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    if (currentAltitude > maxAltitude) {
      maxAltitude = currentAltitude;
    }
  }
  return maxAltitude;
}