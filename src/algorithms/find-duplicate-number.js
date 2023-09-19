/**
 * This function takes in an array of integers nums containing n + 1 integers 
 * where each integer is in the range [1, n] inclusive and there is only one 
 * repeated number. It then finds and returns this repeated number.
 * 
 * @param {number[]} nums - An array of numbers where each number is in the
 *     range [1, n] inclusive
 */
function findDuplicateNumber (nums) {
  let seenNums = {};
  for (const num of nums) {
    seenNums[num] = (seenNums[num] || 0) + 1;
    if (seenNums[num] > 1) {
      return num;
    }
  }
}