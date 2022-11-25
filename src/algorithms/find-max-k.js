/**
 * Given an integer array nums that does not contain any zeroes, finds the
 * largest positive integer k such that -k also exists in the array,
 * and returns the positive integer k. If no such pairing exists, returns -1.
 * 
 * @param {number[]} nums - An array of positive and negative numbers
 * @returns {number} - Returns a number
 */
function findMaxK (nums) {
  let numsSet = new Set(nums);
  let largestInt = 0;
  for (const num of numsSet) {
    if (num > largestInt && numsSet.has(-num)) {
      largestInt = num;
    }
  }
  if (largestInt === 0) {
    largestInt = -1;
  }
  return largestInt;
}