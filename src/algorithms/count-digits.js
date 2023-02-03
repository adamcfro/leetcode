/**
 * Returns the number of digits in num that divide num. An integer divides num
 * if num % num[i] === 0.
 * 
 * @param {number} num - A positive number
 * @returns {number} - Returns a count of digits in num that divide num
 */
function countDigits (num) {
  let count = 0;
  let strNum = String(num);
  for (const digit of strNum) {
    if (num % digit === 0) {
      count++;
    }
  }
  return count;
}