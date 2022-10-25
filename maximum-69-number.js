/**
 * Given a positive integer num consisting of only digits 6 and 9,
 * returns the maximum number possible by changing at most one digit.
 * 
 * Example: 6 becomes 9 or 9 becomes 6.
 * 
 * @param {number} num - A number consisting only of digits 9 and 6
 * @returns {number} - Returns max number possible by changing at most 1 digit
 */
function maximum69Number (num) {
  let numArr = String(num).split('');
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== '9') {
      numArr[i] = '9';
      break;
    }
  }
  numArr = numArr.join('');
  return Number(numArr);
}