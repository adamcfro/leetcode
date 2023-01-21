/**
 * Returns true if there are two distinct indices i and j in the array such that
 * nums[i] === nums[j] and Math.abs(i - j) <= k.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} k - The distance between two indices
 * @returns {boolean} - Returns true if there are two equal numbers in the array
 *     that are within distance k of each other
 */
function containsNearbyDuplicate (nums, k) {
  let elems = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (elems.has(nums[i])) {
      return true;
    }
    elems.add(nums[i]);
    if (elems.size > k) {
      elems.delete(nums[i - k]);
    }
  }
  return false;
}