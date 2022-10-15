/**
 * Given an array of strings operations containing a list of operations,
 * returns the final value of X after performing all the operations.
 * Initially, the value of X is 0.
 * 
 * The four operations available are:
 *     • ++X and X++ increments the value of the variable X by 1.
 *     • --X and X-- decrements the value of the variable X by 1.
 * 
 * @param {string[]} operations - An array of strings representing mathematical
 *     operations
 * @returns {number} - Returns the value of X after the given operations
 */
function finalValueAfterOperations (operations) {
  let val = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === '-' || operations[i][1] === '-') {
      val--;
    } else {
      val ++
    }
  }
  return val;
}