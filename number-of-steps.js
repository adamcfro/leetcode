/**
 * Given an integer num, returns the number of steps to reduce it to zero.
 * 
 * In one step, if the current number is even, num is divided by 2, otherwise,
 * 1 is subtracted from num.
 * 
 * @param {number} num - A positive whole number
 * @returns {number} - Returns the number of steps to reduce num to 0
 */
function numberOfSteps (num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    steps += 1;
  }
  return steps;
}