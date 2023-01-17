/**
 * Takes an integer array nums and an integer k, returning true if all 1's are
 * at least k places away from each other. Otherwise, returns false.
 * 
 * @param {number[]} nums - An array of the numbers 0 and 1
 * @param {number} k - A number of spaces 1's should be away from each other
 * @returns {boolean} - Returns true if all 1's are at least k spaces apart
 */
function kLengthApart (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let placesAway = 0;
    if (nums[i] === 1) {
      while (placesAway < k) {
        i++;
        if (nums[i] !== 1) {
          placesAway++;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}