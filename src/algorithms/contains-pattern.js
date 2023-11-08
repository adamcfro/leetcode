/**
 * Given an array of positive integers arr, find a pattern of length m that is
 * repeated k or more times. Return true if there exists a pattern of length m
 * that is repeated k or more times, otherwise return false.
 *
 * A pattern is a subarray (consecutive sub-sequence) that consists of one or
 * more values, repeated multiple times consecutively without overlapping. A
 * pattern is defined by its length and the number of repetitions.
 *
 * @format
 * @param {number[]} arr - An array of numbers
 * @param {number} m - A number representing a length
 * @param {number} k - A number representing times repeated
 * @returns {boolean} - Returns true if a pattern repeats k or more times
 */

function containsPattern(arr, m, k) {
  let count = 0;
  for (let i = 0; i + m < arr.length; i++) {
    if (arr[i] !== arr[i + m]) {
      count = 0;
    }
    if (arr[i] === arr[i + m]) {
      count++;
    }
    if (count === (k - 1) * m) {
      return true;
    }
  }
  return false;
}
