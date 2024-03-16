/**
 * Given an integer array nums containing positive integers, defines a function
 * encrypt such that encrypt(x) replaces every digit in x with the largest
 * digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333. Returns
 * the sum of encrypted elements.
 *
 * @format
 * @param {number[]} nums - An array of positive numbers
 * @returns {number} - Returns the sum of encrypted elements
 */
function sumOfEncryptedInt(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += encrypt(num);
  }
  return sum;
}

/**
 * A helper function that returns an encrypted number.
 *
 * @param {number} num - A positive number
 * @returns {number} - Returns an encrypted number
 */
function encrypt(num) {
  let largestDigit = 0;
  let len = 0;
  while (num !== 0) {
    let digit = num % 10;
    if (digit > largestDigit) {
      largestDigit = digit;
    }
    num = Math.floor(num / 10);
    len++;
  }
  let encryptedInt = largestDigit;
  while (len > 1) {
    encryptedInt = encryptedInt * 10 + largestDigit;
    len--;
  }
  return encryptedInt;
}
