/**
 * Returns the minimmum number of positive deci-binary numbers needed so that
 * they sum up to n.
 * 
 * A decimal number is called deci-binary if each of its digits is either 0 or 1
 * without any leading zeros.
 * 
 * @param {string} n - A string representation of a number
 * @returns {number} - Returns a count of deci-binary numbers needed to sum to n
 */
function minPartitions (n) {
  let res = 0;
  for (let i = 0; i < n.length; i++) {
    if (Number(n[i]) > res) {
      res = Number(n[i]);
    }
  }
  return res;
}