/**
 * Given a string s, reverses the order of the words and returns the string.
 * 
 * The returned string will contain the words in reverse order concatenated
 * by a single space. Note that s may contain leading or trailing spaces or
 * multiple spaces between two words.
 * 
 * @param {string} s - A string parameter
 * @returns {string} - Returns the string parameter with words in reverse order 
 *     and whitespace removed
 */
function reverseWords (s) {
  s = s.split(' ').filter(element => element);
  return s.reverse().join(' ');
}