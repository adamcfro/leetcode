/**
 * The array-form of an integer num is an array representing its digits in left
 * to right order:
 *     • E.G.: for num = 1321, the array form is [1, 3, 2, 1].
 * Given num, the array-form of an integer, and an integer k, returns the
 * array-form of the integer num + k.
 * 
 * @param {number[]} num - An array of numbers
 * @param {number} k - A number
 * @returns {number[]} - Returns the array-form of the integer num + k
 */
function addToArrayForm (num, k) {
  let sum = BigInt(num.join('')) + BigInt(k);
  let convertSum = sum.toString().split('').map((num) => parseInt(num));
  return convertSum;
}
