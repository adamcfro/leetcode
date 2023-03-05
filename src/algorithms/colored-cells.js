/**
 * There exists an infinitely large two-dimensional grid of uncolored unit 
 * cells. Given a positive integer n, the following routine must be done for n 
 * minutes:
 *     • At the first minute, color any arbitrary unit cell blue.
 *     • Every minute thereafter, color blue every uncolored cell that touches 
 *       a blue cell.
 * Returns the number of colored cells at the end of n minutes.
 * 
 * @param {number} n - A number representing minutes and how many times a 
 *     routine occurs
 * @returns {number} - Returns the count of colored cells after n minutes
 */
function coloredCells (n) {
  if (n === 1) {
    return 1;
  }
  let rows = n * 2 - 1;
  let count = rows;
  for (let i = 1; i < rows; i += 2) {
    count += i * 2;
  }
  return count;
}