/**
 * Given an integer num, returns three consecutive integers (as a sorted array)
 * that sum to num. If num cannot be expressed as the sum of three consecutive
 * integers, returns an empty array.
 * 
 * @param {number} num - A number parameter
 * @returns {number[]} - Returns an array of numbers or an empty array
 */
function sumOfThree (num) {
  let res = [];
  if (num % 3 !== 0) {
    return res;
  } else {
    let mid = num / 3;
    for (let i = mid - 1; i <= mid + 1; i++) {
      res.push(i);
    }
  }
  return res;
}