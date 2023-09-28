/**
 * Given an array of integers nums sorted in non-decreasing order, finds the
 * starting and ending position of a given target value and returns these
 * positions in an array. If target is not found in the array, returns [-1, -1].
 * 
 * @param {number[]} nums - An array of sorted numbers
 * @param {number} target - A number representing a target value
 * @returns {number[]} - Returns an array with starting and ending positions
 *     of a target value
 */
function searchRange (nums, target) {
  let res = [-1, -1];
  let start = 0;
  let end = nums.length - 1;
  let index;
  while (start <= end) {
    if (start > end) {
      return res;
    }
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      index = mid;
      break;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  let i = index;
  while (nums[i] === target) {
    res[0] = i;
    i--;
  }
  i = index;
  while (nums[i] === target) {
    res[1] = i;
    i++;
  }
  return res;
}