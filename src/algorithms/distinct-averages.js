/**
 * Given an array of numbers of even length, as long as nums is not empty,
 * you must repetitively:
 *     • Find the minimum number in nums and remove it.
 *     • Find the maximum number in nums and remove it.
 *     • Calculate the average of the two removed numbers.
 *       - The average of two numbers a and b is (a + b) / 2.
 * 
 * Returns the number of distinct averages calculated using the above process.
 * 
 * @param {*} nums - An array of numbers
 * @returns - Returns a count of distinct averages
 */
function distinctAverages (nums) {
  let averages = new Set();
  nums.sort((a, b) => {
    return a - b;
  });
  while (nums.length > 0) {
    let min = nums[0];
    let max = nums[nums.length - 1];
    nums.splice(0, 1);
    nums.splice(nums.length - 1);
    if (!averages.has((max + min) / 2)) {
      averages.add((max + min) / 2);
    }
  }
  return averages.size;
}