/**
 * Given a non-negative integer array nums, returns the minimum number of
 * operations to make every element in nums equal to 0.
 * 
 * In one operation:
 *     • choose a positive integer x such that x is less than or equal to the
 *       smallest non-zero element in nums.
 *     • subtract x from every positive element in nums.
 * 
 * @param {number[]} nums - An array of non-negative numbers
 * @returns {number} - Returns a count of operations to make all elements zero
 */
function minimumOperations (nums) {
  let operations = 0;
  let minNum = Math.max(...nums);
  if (nums.every(elem => elem === 0)) {
    return operations;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[i] < minNum) {
      minNum = nums[i];
    }
  }
  while (nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] -= minNum;
      if (nums[i] <= 0) {
        nums.splice(i, 1);
        i--;
      }
    }
    minNum = Math.min(...nums);
    operations++;
  }
  return operations;
}