/**
 * Given a circular array nums, returns an array consisting of the next greater 
 * number for every element in nums, or -1 for each element without a next
 * greater number.
 * 
 * The next greater number of a number x is the first greater number in its
 * traversing-order of the array, searching circularly if necessary.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of nums next greater numbers
 */
function nextGreaterElements (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (i !== j) {
      if (nums[j] > nums[i]) {
        res.push(nums[j]);
        break;
      }
      j++;
      if (j >= nums.length) {
        j = 0;
      }
      if (i === j) {
        res.push(-1);
        break;
      }
    }
  }
  return res;
}