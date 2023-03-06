/**
 * Given a positive integer num, splits it into two non-negative integers num1
 * and num2 such that:
 *     • The concatenation of num1 and num2 is a permutation of num.
 *     • The sum of the number of occurrences of each digit in num1 and num2
 *       is equal to the number of occurrences of that digit in num.
 *     • num1 and num2 can contain leading zeros.
 * Returns the minimum possible sum of num1 and num2.
 * 
 * @param {number} num - A positive number
 * @returns {number} - Returns the minimum possible sum of num1 and num2
 */
function splitNum (num) {
  let nums = num.toString().split('');
  nums.sort((a, b) => {
    return a - b;
  });
  let num1 = '';
  let num2 = '';
  for (let i = 0; i < nums.length; i += 2) {
    num1 += nums[i];
  }
  for (let j = 1; j < nums.length; j += 2) {
    num2 += nums[j];
  }
  return Number(num1) + Number(num2);
}