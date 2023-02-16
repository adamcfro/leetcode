/**
 * Given an even length string of an even number of opening and closing brackets
 * where a string is balanced if:
 *     • the string is empty,
 *     • it can be written as AB, where both A and B are balanced strings, or
 *     • it can be written as [C], where C is a balanced string.
 * Returns the minimum number of swaps between any two indices necessary to
 * make the string balanced.
 * 
 * @param {string} s - A string made up of opening and closing brackets
 * @returns {number} - Returns a count of swaps to make string balanced
 */
function minSwaps (s) {
  let res = 0;
  let openBrackets = 0;
  for (const char of s) {
    if (char === ']') {
      if (openBrackets > 0) {
        openBrackets--;
      } else {
        openBrackets++;
        res++;
      }
    } else {
      openBrackets++;
    }
  }
  return res;
}