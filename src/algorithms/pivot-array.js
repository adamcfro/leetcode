/**
 * Given a 0-indexed integer array nums and an integer pivot, rearranges nums
 * such that the following conditions are satisfied:
 *   • Every element less than pivot appears before every element greater than
 *     pivot.
 *   • Every element equal to pivot appears in between the elements less than
 *     and greater than pivot.
 *   • The relative order of the elements less than pivot and the elements
 *     greater than pivot is maintained.
 *     • More formally, consider every pi, pj where pi is the new position of
 *       the ith element and pj is the new position of the jth element. For
 *       elements less than pivot, if i < j and nums[i] < pivot and nums[j] <
 *       pivot, then pi < pj. Similarly for elements greater than pivot,
 *       if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.
 * Returns nums after the rearrangement.
 *
 * @format
 * @param {number[]} nums - An array of numbers
 * @param {number} pivot - A number representing a pivot point
 * @returns {number[]} - Returns an array of numbers after rearranging
 */

function pivotArray(nums, pivot) {
  let res = [];
  let lessThanPivot = [];
  let greaterThanPivot = [];
  let pivotCount = 0;
  for (const num of nums) {
    if (num < pivot) {
      lessThanPivot.push(num);
    } else if (num > pivot) {
      greaterThanPivot.push(num);
    } else {
      pivotCount++;
    }
  }
  for (const num of lessThanPivot) {
    res.push(num);
  }
  for (let i = 0; i < pivotCount; i++) {
    res.push(pivot);
  }
  for (const num of greaterThanPivot) {
    res.push(num);
  }
  return res;
}
