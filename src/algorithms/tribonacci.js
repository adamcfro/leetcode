/**
 * The Tribonacci sequence Tn is defined as follows: 
 *     T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * 
 * Given n, return the value of Tn.
 * 
 * @param {number} n - A whole number between 0 and 37 inclusive
 * @returns {number} - Returns the nth Tribonacci number
 */
function tribonacci (n) {
  let res = 1;
  if (n < 2) {
    res = n;
  }
  let a = 0;
  let b = 1;
  let c = 1;
  for (let i = 3; i <= n; i++) {
    res = a + b + c;
    a = b;
    b = c;
    c = res;
  }
  return res;
}