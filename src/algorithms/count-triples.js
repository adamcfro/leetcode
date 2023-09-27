/**
 * A square triple (a,b,c) is a triple where a, b, and c are integers and
 * a**2 + b**2 = c**2.
 * 
 * Given an integer n, returns the number of square triples such that
 * 1 <= a, b, c <= n.
 * 
 * @param {number} n - A positive number
 * @returns {number} - Returns a count of the number of square triples
 */
function countTriples (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) {
          count++;
        }
      }
    }
  }
  return count;
}