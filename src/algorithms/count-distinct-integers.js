/**
 * Given an array of numbers consisting of positive integers, takes each integer
 * in the array, reverses its digits, and adds it to the end of the array.
 * Returns the number of distinct integers in the final array.
 * 
 * @param {number[]} nums - An array of positive numbers
 * @returns {number} - Returns a count of unqiue numbers in the final array
 */
function countDistinctIntegers (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let temp = String(nums[i]).split('').reverse().join('');
    nums.push(Number(temp));
  }
  let uniqueNums = new Set(nums);
  return uniqueNums.size;
}