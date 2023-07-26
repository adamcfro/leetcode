/**
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t
 * (i.e., t is concatenated with itself one or more times)
 * 
 * Given two strings str1 and str2, returns the largest string x such that
 * x divides both str1 and str2.
 * 
 * @param {string} str1 - A string of uppercase English letters
 * @param {string} str2 - A string of uppercase English letters
 * @returns {string} - Returns the largest string that divides str1 and str2
 */
function gcdOfStrings (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  let greatestLength = gcd(str1.length, str2.length);
  return str1.substring(0, greatestLength);
}

/**
 * A helper function that finds the length of the greatest common divisor
 * 
 * @param {number} len1 - The length of string parameter 1
 * @param {number} len2 - The length of string parameter 2
 * @returns {number} - Returns the length of the gcd
 */
function gcd (len1, len2) {
  while (0 !== len2) {
    let temp = len1 % len2;
    len1 = len2;
    len2 = temp;
  }
  return len1;
}