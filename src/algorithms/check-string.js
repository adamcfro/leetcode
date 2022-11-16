/**
 * Given a string s consisting of only the characters 'a' and 'b',
 * returns true if every 'a' appears before every 'b' in the string.
 * Returns false otherwise.
 * 
 * @param {string} s - A string made up of lowercase 'a' and 'b'
 * @returns {boolean} - Returns true if there are no 'b' chars before 'a' chars
 */
function checkString (s) {
  let bAppearance = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'b') {
      bAppearance = true;
    } else if (bAppearance && s[i] === 'a') {
      return false;
    }
  }
  return true;
}