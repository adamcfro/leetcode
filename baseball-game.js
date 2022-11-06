/**
 * Given an array of strings operations representing scores of a baseball game, 
 * returns the sum of scores on record after performing all the operations.
 * 
 * Operations to be applied consist of '+', 'D', 'C', and x (an integer):
 *     • An integer x:
 *       - Record a new score of x.
 *     • '+':
 *       - Record a new score that is the sum of the previous two scores.
 *     • 'D':
 *       - Record a new score that is double the previous score.
 *     • 'C':
 *       - Invalidate the previous score, removing it from the record.
 * 
 * @param {string[]} operations - An array of string representing operations
 * @returns {number} - Returns the sum of scores on record
 */
function calPoints (operations) {
  let total = 0;
  let record = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '+') {
      record.push(record[record.length - 1] + record[record.length - 2]);
    } else if (operations[i] === 'C') {
      record.pop();
    } else if (operations[i] === 'D') {
      record.push(2 * record[record.length - 1]);
    } else {
      record.push(Number(operations[i]));
    }
  }
  for (let i = 0; i < record.length; i++) {
    total += record[i];
  }
  return total;
}