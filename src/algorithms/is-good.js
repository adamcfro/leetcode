/**
 * Given an array nums where an array is good if it is a permutation of an array
 * base[n], returns true if the given array is good.
 * 
 * base[n] = [1, 2, ..., n - 1, n, n] :
 *   • In other words, it is an array of length n + 1 which contains 1 to n - 1 
 *     exactly once, plus two occurrences of n). For example, base[1] = [1, 1] 
 *     and base[3] = [1, 2, 3, 3].
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {boolean} - Returns true if nums is a good array
 */
function isGood (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  if (
    nums[nums.length - 1] !== nums[nums.length - 2] 
    || nums.length !== nums[nums.length - 1] + 1
  ) {
    return false;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] !== i + 1) {
      return false;
    }
  }
  return true;
}