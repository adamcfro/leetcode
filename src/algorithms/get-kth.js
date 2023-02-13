/**
 * The power of an integer x is defined as the number of steps needed to
 * transform x into 1 using the following steps:
 *     • if x is even, then x = x / 2
 *     • if x is odd, then x = 3 * x + 1
 * 
 * Returns the kth integer in the range [lo, hi] sorted in ascending order
 * by the power value.
 * 
 * @param {number} lo - A number representing the low end of a number range
 * @param {number} hi - A number representing the high end of a number range
 * @param {number} k - The kth number in a sorted array
 * @returns {number} - Returns the kth number in a sorted array
 */
function getKth (lo, hi, k) {
  let res = [];
  for (let i = lo; i <= hi; i++) {
    let steps = 0;
    let x = i;
    while (x !== 1) {
      if (x % 2 === 0) {
        x = x / 2;
      } else {
        x = 3 * x + 1;
      }
      steps++;
    }
    res.push([i, steps]);
  }
  res.sort((a, b) => {
    return a[1] - b[1] || a[0] - b[0];
  });
  return res[k - 1][0];
}