/**
 * Given a string s containing lowercase English letters and a matrix shift,
 * where shift[i] = [direction, amount]:
 *     • direction can be 0 (for left shift) or 1 (for right shift).
 *     • amount is the amount by which string s is to be shifted
 *     • a left shift by 1 means remove the first character of s and append it
 *       to the end.
 *     • a right shift by 1 means remove the last character of s and add it
 *       to the beginning.
 * Returns the final string after all operations.
 * 
 * @param {string} s - A string of lowercase English letters
 * @param {number[][]} shift - An array of number arrays representing direction
 *     and amount of shifting to occur
 * @returns {string} - Returns a modified string
 */
function stringShift (s, shift) {
  s = s.split('');
  for (let i = 0; i < shift.length; i++) {
    let j = 0;
    if (shift[i][0] === 0) {
      while (j < shift[i][1]) {
        const char = s.shift();
        s.push(char);
        j++;
      }
    } else if (shift[i][0] === 1) {
      while (j < shift[i][1]) {
        const char = s.pop();
        s.unshift(char);
        j++;
      }
    }
  }
  return s.join('');
}