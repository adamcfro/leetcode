/**
 * Given a string s representing an attendance record for a student where each
 * character signifies whether the student was absent, late, or present on that
 * day. The record contains the following three characters:
 *   * 'A': absent, 'L': late, 'P': present.
 * The student is eligible for an attendance award if they were absent for fewer
 * than 2 days, and the studen was never late for 3 or more consecutive days.
 * 
 * Returns true if the student is eligible for an attendance award.
 * 
 * @param {string} s - A string made up of the characters 'A', 'L', and 'P'
 * @returns {boolean} - Return true if the student is eligible for an award
 */
function checkRecord (s) {
  let daysLate = 0;
  let daysAbsent = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      daysAbsent++;
      daysLate = 0;
      if (daysAbsent > 1) {
        return false;
      }
    } else if (s[i] === 'L') {
      daysLate++;
      if (daysLate >= 3) {
        return false;
      }
    } else {
      daysLate = 0;
    }
  }
  return true;
}