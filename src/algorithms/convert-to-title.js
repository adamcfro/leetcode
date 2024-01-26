/**
 * Given an integer columnNumber, return its corresponding column title as it
 * appears in an Excel sheet.
 *
 * For example:
 *   • A -> 1
 *   • B -> 2
 *   • C -> 3
 *     ...
 *   • Z -> 26
 *   • AA -> 27
 *   • AB -> 28
 *     ...
 *
 * @format
 * @param {number} columnNumber - A number representing a column
 * @returns {string} - Returns a string representing a column
 */

function convertToTitle(columnNumber) {
  let res = [];
  while (columnNumber > 26) {
    let col = columnNumber % 26;
    if (col === 0) {
      col = 26;
    }
    res.push(String.fromCharCode(col + 64));
    columnNumber = (columnNumber - col) / 26;
  }
  res.push(String.fromCharCode(columnNumber + 64));
  return res.reverse().join("");
}
