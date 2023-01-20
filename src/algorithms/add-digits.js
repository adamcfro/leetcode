/**
 * Repeatedly adds all the digits of num until the result has only one digit
 * and returns that number.
 * 
 * @param {number} num - A number parameter
 * @returns {number} - Returns a single digit number
 */
function addDigits (num) {
  let sum = 0;
  let temp = num;
  while (String(num).length > 1) {
    while (temp !== 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    num = sum;
    temp = num;
    sum = 0;
  }
  return num;
}