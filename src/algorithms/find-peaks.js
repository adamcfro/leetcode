/**
 * Given a 0-indexed array mountain, returns an array that consists of indices
 * of peaks in the given array in any order.
 *
 * A peak is defined as an element that is strictly greater than its
 * neighboring elements. The first and last elements of the array are not peaks.
 *
 * @format
 * @param {number[]} mountain - An array of numbers representing mountain height
 * @returns {number[]} - Returns the indices of peaks in mountain
 */

function findPeaks(mountain) {
  let peaks = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
}
