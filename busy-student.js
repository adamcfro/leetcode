/**
 * Given two integer arrays startTime and endTime and an integer queryTime,
 * returns the number of students doing their homework at time queryTime.
 * 
 * The ith student starts doing their homework at the startTime[i] and finishes
 * it at time endTime[i]. Count increases when queryTime lays  in the interval
 * [startTime[i], endTime[i]] inclusive.
 * 
 * @param {number[]} startTime - An array of start time numbers
 * @param {number[]} endTime - An array of end time numbers
 * @param {number} queryTime - A target number
 * @returns {number} - Returns a count of times queryTime lays in the interval
 *     [startTime[i], endTime[i]] inclusive
 */
function busyStudent (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      count++;
    }
  }
  return count;
}