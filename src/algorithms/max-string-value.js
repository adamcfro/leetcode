/**
 * Given an array strs of alphanumeric strings, returns the maximum value of
 * any string in strs.
 * 
 * The value of an alphanumeric string can be defined as:
 *     • the numeric representation of the string in base 10, if it comprises
 *       of digits only.
 *     • the length of the string, otherwise.
 * 
 * @param {string[]} strs - An array of strings
 * @returns {number} - Returns the longest string or highest string 
 *     representation of a number
 */
function maximumValue (strs) {
  let maxVal = 0;
  for (let i = 0; i < strs.length; i++) {
    if (isNaN(strs[i])) {
      if (strs[i].length > maxVal) {
        maxVal = strs[i].length;
      }
    } else {
      if (Number(strs[i]) > maxVal) {
        maxVal = Number(strs[i]);
      }
    }
  }
  return maxVal;
}