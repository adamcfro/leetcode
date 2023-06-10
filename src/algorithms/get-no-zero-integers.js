/**
 * Given an integer n, returns a list of two integers [a, b] where a and b are 
 * no-zero integers, and a + b = n.
 * 
 * @param {number} n - A target number for two numbers to sum to
 * @returns {number[]} - Returns an array of two numbers that sum to n
 */
function getNoZeroIntegers (n) {
  let res = [n, 0];
  while (true) {
    res[0]--;
    res[1]++;
    if (!res[0].toString().includes('0') && !res[1].toString().includes('0')) {
      return res;
    }
  }
}