/**
 * Given an integer array nums, in one operation takes two integers that are
 * equal, removes both integers and adds 1 to the count of pairs.
 * 
 * Returns an integer array of size 2 where answer[0] is the number of pairs
 * that are formed and answer[1] is the number of leftover integers in nums
 * after doing the operation as many times as possible.
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function numberOfPairs (nums) {
  let pairs = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i - 1, 2);
      pairs++;
      i--;
    }
  }
  return [pairs, nums.length];
}