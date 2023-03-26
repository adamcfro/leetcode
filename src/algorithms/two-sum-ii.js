/**
 * Given an array of numbers that is already sorted in increasing order, finds
 * two numbers such that they add up to a specific target number. Returns the
 * indices of the two numbers (the array is 1-indexed, so 1 is added to each
 * index.)
 * 
 * @param {number[]} numbers - An array of numbers sorted in increasing order
 * @param {number} target - A target for two numbers to add up to
 * @returns {number[]} - Returns the indices (1-indexed) of the two numbers
 *     that add up to target
 */
function twoSum (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}