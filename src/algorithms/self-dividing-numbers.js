/**
 * Given two integers left and right, returns an array of all the self-dividing
 * number in the range [left, right].
 * 
 * A self-dividing number is a number that is divisible by every digit it
 * contains. It is also not allowed to contain the digit zero.
 * 
 * @param {number} left - A number denoting the start of a range
 * @param {number} right - A number denoting the end of a range inclusive
 * @returns {number[]} - Returns an array of self-dividing numbers
 */
function selfDividingNumbers (left, right) {
  let numsArr = [];
  for (let i = left; i <= right; i++) {
    let num = i;
    while (num > 0) {
      let digit = num % 10;
      if (digit === 0) {
        break;
      } else if (i % digit !== 0) {
        break;
      } else if (String(num).length === 1) {
        numsArr.push(i);
        break;
      } else if (i % digit === 0) {
        num = Math.floor(num / 10);
      }
    }
  }
  return numsArr;
}