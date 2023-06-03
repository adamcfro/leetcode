/**
 * There is a malfunctioning keyboard where some letter keys do not work. All 
 * other keys on the keyboard work properly.
 * 
 * Given a string text of words separated by a single space (no leading or 
 * trailing spaces) and a string brokenLetters of all distinct letter keys that 
 * are broken, returns the number of words in text you can fully type using 
 * this keyboard.
 * 
 * @param {string} text - A string of lowercase English letters with spaces
 * @param {string} brokenLetters - A string of lowercase English letters
 * @returns {number} - Returns a count of typable words
 */
function canBeTypedWords (text, brokenLetters) {
  let count = 0;
  text = text.split(' ');
  if (brokenLetters.length === 0) {
    return text.length;
  }
  for (const word of text) {
    for (let i = 0; i < brokenLetters.length; i++) {
      if (word.includes(brokenLetters[i])) {
        break;
      } else if (i + 1 === brokenLetters.length) {
        count++;
      }
    }
  }
  return count;
}