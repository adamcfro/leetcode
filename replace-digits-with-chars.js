/**
 * Returns a new string after replacing every odd index with a new character.
 * 
 * Replacement occurs by taking the characters at even indexes s[i] and adding
 * the ascii values at s[i + 1] to that character's value, replacing s[i + 1]
 * with the new character.
 * 
 * @param {string} s - A string of letters and numbers
 * @returns {string} - Returns a new string
 */
function replaceDigits (s) {
  let newStr = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      newStr += String.fromCharCode(s.charCodeAt(i - 1) + Number(s[i]));
    } else {
      newStr += s[i];
    }
  }
  return newStr;
}