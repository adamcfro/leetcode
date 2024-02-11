/**
 * Given a string columnTitle that represents the column title as appears in an
 * Excel sheet, return its corresponding column number.
 * For example:
 *   • A -> 1
 *   • B -> 2
 *   • C -> 3
 *   ...
 *   • Z -> 26
 *   • AA -> 27
 *   • AB -> 28
 *   ...
 *
 * @format
 * @param {string} columnTitle - An uppercase English letter representing an
 *     Excel sheet column number
 * @returns {number} - Returns a number representing an Excel sheet column
 *     number
 */

function titleToNumber(columnTitle) {
  let res = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle.charCodeAt(i) - 64;
    res = res + Math.pow(26, columnTitle.length - 1 - i) * char;
  }
  return res;
}
