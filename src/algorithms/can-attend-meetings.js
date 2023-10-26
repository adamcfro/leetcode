/**
 * Given an array of meeting time intervals where intervals[i] = [startᵢ, endᵢ],
 * returns true if a person could attend all meetings.
 *
 * @format
 * @param {number[][]} intervals - A 2D array of numbers representing start
 *     and end times
 * @returns {boolean} - Returns true if a person could attend all meetings
 */

function canAttendMeetings(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}
