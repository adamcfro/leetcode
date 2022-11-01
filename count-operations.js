/**
 * Given two non-negative integers num1 and num2, returns the number of
 * operations required to make either num1 = 0 or num2 = 0.
 * 
 * In one operation, if num1 >= num2, subtracts num2 from num1,
 * otherwise subtracts num1 from num2.
 * 
 * @param {number} num1 - First number parameter
 * @param {number} num2 - Second number parameter
 * @returns {number} - Returns a count of operations
 */
function countOperations (num1, num2) {
  let count = 0;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 >= num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
    count++;
  }
  return count;
}