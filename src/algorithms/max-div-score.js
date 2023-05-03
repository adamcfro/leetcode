/**
 * Function takes in two integer arrays, nums and divisors, and returns
 * the maximum divisibility score. If there is more than one integer with the
 * max score, returns the minimum of them.
 * 
 * The divisibility score of divisors[i] is the number of indices j such that
 * nums[j] is divisible by divisors[i].
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number[]} divisors - An array of numbers used as divisors
 * @returns {number} - Returns the max divisibility score
 */
function maxDivScore (nums, divisors) {
  let res = -1;
  let maxScore = -1;
  for (let i = 0; i < divisors.length; i++) {
    let tempScore = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % divisors[i] === 0) {
        tempScore++;
      }
    }
    if (tempScore > maxScore) {
      maxScore = tempScore;
      res = divisors[i];
    } else if (maxScore === tempScore) {
      res = Math.min(res, divisors[i]);
    }
  }
  return res;
}