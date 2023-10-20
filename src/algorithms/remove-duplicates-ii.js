/**
 * Given an integer array nums sorted in non-decreasing order, removes some
 * duplicates in-place such that each unique element appears at most twice. The
 * relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages,
 * you must instead have the result be placed in the first part of the array
 * nums. More formally, if there are k elements after removing the duplicates,
 * then the first k elements of nums should hold the final result. It does not
 * matter what you leave beyond the first k elements.
 *
 * Returns k after placing the final result in the first k slots of nums.
 *
 * @format
 * @param {number[]} nums - A sorted array of numbers
 * @returns {number} - Returns a count of elements left in the array
 */

function removeDuplicates(nums) {
  let i = 0;
  for (const num of nums) {
    if (i === 0 || i === 1 || nums[i - 2] !== num) {
      nums[i] = num;
      i++;
    }
  }
  return i;
}
