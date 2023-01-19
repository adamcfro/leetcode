/**
 * Returns the average value of all even integers in an array that are also
 * divisible by 3, rounded down to the nearest integer.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns an average
 */
function averageValue (nums) {
  let sum = 0;
  let count = 0;
  for (const num of nums) {
    if (num % 2 === 0 && num % 3 === 0) {
      sum += num;
      count++;
    }
  }
  return count !== 0 ? Math.floor(sum / count) : 0;
}