/**
 * Given two arrays of strings that represent two inclusive events that 
 * happened on the same day, event1 and event2, where:
 *     • event1 = [startTime1, endTime1] and
 *     • event2 = [startTime2, endTime2],
 * returns true if there is a conflict between two events. Otherwise, returns 
 * false. 
 * 
 * A conflict happens when two events have some non-empty intersection 
 * (i.e., some moment is common to both events). Event times are valid 24 hours 
 * format in the form of HH:MM.
 * 
 * @param {string} event1 - A string representation of starting time 1
 * @param {string} event2 - A string representation of starting time 2
 * @returns {boolean} - Returns true if there is a conflict, false otherwise
 */
function haveConflict (event1, event2) {
  if (
    event1[0] <= event2[0] && event2[0] <= event1[1] ||
    event2[0] <= event1[0] && event1[0] <= event2[1]
  ) {
    return true;
  }
  return false;
}