/**
 * A cell (r, c) of an excel sheet is represented as a string "<col><row>" .
 * 
 * Given a string s in the format "<col1><row1>:<col2><row2>", where <co1> 
 * represents the column c1, <row1> represents the row r1, <col2> represents 
 * the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 
 * <= c2.
 * 
 * Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. 
 * The cells should be represented as strings in the format mentioned above and 
 * be sorted in non-decreasing order first by columns and then by rows.
 * 
 * @param {string} s - A string representing columns and rows of an excel sheet
 * @returns {string[]} - Returns an array of strings representing cells
 */
function cellsInRange (s) {
  let startLetter = s[0];
  let startNumber = s[1];
  let endLetter = s[3];
  let endNumber = s[4];
  let res = [];
  for (let i = startNumber; i <= endNumber; i++) {
    res.push(startLetter + i);
    if (startLetter < endLetter && String(i) === endNumber) {
      startLetter = String.fromCharCode(startLetter.charCodeAt(0) + 1);
      i = startNumber - 1;
    }
  }
  return res;
}