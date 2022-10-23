/**
 * Given a string s, returns the string after replacing every uppercase letter
 * with the same lowercase letter.
 * 
 * @param {string} s - A string of uppercase and lowercase characters
 * @returns {string} - Returns the modified string
 */
function changeToLowerCase (s) {
  for (let i = 0; i < s.length; i++) {
    let temp = s.charCodeAt(i);
    if (temp > 64 && temp < 91) {
      temp += 32;
    }
    s = s.replace(s[i], String.fromCharCode(temp));
  }
  return s;
}