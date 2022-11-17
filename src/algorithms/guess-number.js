/**
 * Given a number between 1 and n, returns the number that has been picked.
 * 
 * @param {number} n - The upper limit of a range
 * @returns {number} - Returns a picked number
 */
function guessNumber (n) {
  let front = 1;
  let end = n;
  while (front <= end) {
    let mid = Math.floor((front + end) / 2);
    let numGuess = guess(mid);
    if (numGuess === 0) {
      return mid;
    } else if (numGuess === -1) {
      end = mid - 1;
    } else {
      front = mid + 1;
    }
  }
  return mid;
}
