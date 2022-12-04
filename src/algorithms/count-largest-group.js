/**
 * Given an integer n, groups each number from 1 to n according the the sum of 
 * its digits, and returns the number of groups that have the largest size.
 * 
 * @param {number} n - The upper limit of a range
 * @returns {number} - Returns a count of groups with the largest size
 */
function countLargestGroup (n) {
  let groups = {};
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let copy = i;
    while (copy !== 0) {
      sum += copy % 10;
      copy = Math.floor(copy / 10);
    }
    if (groups[sum]) {
      groups[sum].push(i);
    } else {
      groups[sum] = [i];
    }
  }
  let maxSize = 0;
  for (const val of Object.values(groups)) {
    if (val.length > maxSize) {
      maxSize = val.length;
    } 
  }
  let largestGroups = 0;
  for (const val of Object.values(groups)) {
    if (val.length === maxSize) {
      largestGroups++;
    }
  }
  return largestGroups;
}