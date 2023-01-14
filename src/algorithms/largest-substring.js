/**
 * Given a string s, returns the length of the longest substring between two
 * equal characters, excluding the two characters. If there is no such
 * substring, returns -1.
 * 
 * A substring is a contiguous sequence of characters within a string.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {number} - Returns the length of the longest substring between
 *     two equal characters
 */
function maxLengthBetweenEqualCharacters (s) {
  let res = -1;
  let indices = {};
  for (let i = 0; i < s.length; i++) {
    if (indices.hasOwnProperty(s[i])) {
      indices[s[i]].push(i);
    } else {
      indices[s[i]] = [i];
    }
  }
  for (const val of Object.values(indices)) {
    if (val.length > 0) {
      if (val[val.length - 1] - val[0] - 1 > res) {
        res = val[val.length - 1] - val[0] - 1;
      }
    }
  }
  return res;
}