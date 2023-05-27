/**
 * Given a string s and an array of strings words, returns true if s is a prefix
 * string of words, or false otherwise.
 * 
 * A string s is a prefix string of words if s can be made by concatenating the
 * first k strings in words or some positive k no larger than words.length.
 * 
 * @param {string} s - A string of lowercase English letters
 * @param {string[]} words - An array of strings of lowercase English letters
 * @returns {boolean} - Returns true if s is a prefix string of words
 */
function isPrefixString (s, words) {
  let str = '';
  for (const word of words) {
    str += word;
    if (str === s) {
      return true;
    }
  }
  return false;
}