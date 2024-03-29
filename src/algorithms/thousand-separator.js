/**
 * Given an integer n, adds a dot '.' as the thousands separator and returns
 * the result in string format.
 * 
 * @param {number} n - A number parameter
 * @returns {string} - Returns the parameter n with a dot '.' as the thousands 
 *     separator
 */
function thousandSeparator (n) {
  n = String(n).split('');
  let j = n.length - 3;
  if (n.length > 3) {
    for (let i = j; i > 0; i -= 3) {
      n.splice(i, 0, '.');
    }
  }
  n = n.join('');
  return n;
}