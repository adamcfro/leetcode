/**
 * Given an integer array arr, returns the mean of the remaining integers after
 * removing the smallest 5% and the largest 5% of the elements.
 * 
 * Answers returned fixed at 5 decimal places.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number} - Returns the mean from a modified array
 */
function trimMean (arr) {
  let mean = 0;
  let fivePercent = Math.floor(arr.length / 20);
  arr.sort((a, b) => {
    return a - b;
  });
  arr.splice(0, fivePercent) + arr.splice(arr.length - fivePercent);
  for (let i = 0; i < arr.length; i++) {
    mean += arr[i];
  }
  mean = Number((mean / arr.length).toFixed(5));
  return mean;
}