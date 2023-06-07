/**
 * Given a 2D integer array ranges and two integers left and right where each 
 * ranges[i] = [starti, endi] represents an inclusive interval, returns true if 
 * each integer in the inclusive range [left, right] is covered by at least one 
 * interval in ranges. Returns false otherwise.
 * 
 * An integer x is covered by an interval ranges[i] = [starti, endi] if:
 *     • starti <= x <= endi.
 * 
 * @param {number[][]} ranges - An array of number arrays
 * @param {number} left - The low end of a range
 * @param {number} right - The high end of a range
 * @returns {boolean} - Returns true if all numbers in the range [left, right]
 *     is covered by at least one interval in ranges
 */
function isCovered (ranges, left, right) {
  let range = new Set();
  for (let i = left; i <= right; i++) {
    range.add(i);
  }
  for (let i = 0; i < ranges.length; i++) {
    for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
      if (range.has(j)) {
        range.delete(j);
      }
    }
  }
  return range.size === 0;
}