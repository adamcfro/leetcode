/**
 * Given a sorted array of distinct integers and a target value, returns the
 * index if the target is found. If the target is not found, returns the
 * index where it would be if it were inserted in order.
 * 
 * @param {number[]} nums - A sorted array of numbers
 * @param {number} target - A target number
 * @returns - Returns the index of the target number, or the index where it
 *     should be found if it existed
 */
function searchInsert (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let current = Math.floor((start + end) / 2);
    if (nums[current] === target) {
      return current;
    } else if (nums[current] < target) {
      start = current + 1;
    } else {
      end = current - 1;
    }
  }
  return start;
}