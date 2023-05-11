/**
 * This function takes an array of integers nums, and starts with an initial 
 * positive value startValue. In each iteration, calculates the step by step 
 * sum of startValue plus elements in nums (from left to right). Returns the 
 * minimum positive value of startValue such that the step by step sum is never 
 * less than 1.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a number representing a starting value
 */
function minStartValue (nums) {
  let startVal = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < 1) {
      let temp = Math.abs(1 - sum);
      sum += temp;
      startVal += temp;
    }
  }
  if (startVal === 0) {
    startVal = 1;
  }
  return startVal;
}