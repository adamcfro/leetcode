/**
 * Given a roman numeral, convert it to an integer.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, when a smaller numeral precedes a larger numeral, subtraction is
 * used instead of addition. There are six instances where this is the case:
 *  • I can be placed before V (5) and X (10) to make 4 and 9.
 *  • X can be placed before L (50) and C (100) to make 40 and 90.
 *  • C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * @param {string} numeral 
 * @returns {number}
 */
function romanToInteger (numeral) {
  let romanVals = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let intValue = 0;
  for (let i = numeral.length - 1; i >= 0; i--) {
    if (romanVals[numeral[i]] < romanVals[numeral[i + 1]]) {
      intValue -= romanVals[numeral[i]];
    } else {
      intValue += romanVals[numeral[i]];
    }
  }
  return intValue;
}