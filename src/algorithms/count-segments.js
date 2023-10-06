/**
 * Given a string s, return the number of segments in the string.
 * 
 * A segment is defined to be a contiguous sequence of non-space characters.
 * 
 * @param {string} s - A string of characters
 * @returns {number} - Returns the number of segments in a string
 */
function countSegments (s) {
  let res = [];
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      res.push(arr[i]);
    }
  }
  return res.length;
}