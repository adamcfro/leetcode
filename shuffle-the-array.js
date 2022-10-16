/**
 * Given an array `nums` consisting of 2n elements in the form
 * [x1,x2,...,xn,y1,y2,...,yn], returns the array in the form
 * [x1,y1,x2,y2,...,xn,yn].
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number} n - A number half the length of `nums` array
 * @returns {number[]} - Returns a new array
 */
function shuffle (nums, n) {
  let shuffledArr = [];
  for (let i = 0; i < n; i++) {
    shuffledArr.push(nums[i], nums[n + i]);
  }
  return shuffledArr;
}