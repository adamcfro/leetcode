/**
 * An integer divisible by the sum of its digits is said to be a Harshad
 * number. You are given an integer x. Return the sum of the digits of x if x
 * is a Harshad number, otherwise, return -1.
 *
 * @format
 * @param {number} x - A positive number
 * @returns {number} - Returns the sum of the digits of x if x is a Harshad
 *     number, otherwise returns -1
 */

function sumOfTheDigitsOfHarshadNumber(x) {
  let sum = 0;
  let temp = x;
  while (temp !== 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  if (x % sum === 0) {
    return sum;
  }
  return -1;
}
