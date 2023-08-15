/**
 * A laptop keyboard is faulty, and whenever the character 'i' is typed, it
 * reverses everything previously typed. Typing other characters works as 
 * expected.
 * 
 * Returns the final string that will be present on the laptop screen when
 * using the faulty keyboard.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {string} - Returns a modified string
 */
function finalString (s) {
  s = s.split('');
  let i = 0;
  while (i < s.length) {
    if (s[i] === 'i') {
      s[i] = '';
      let first = s.slice(0, i);
      let last = s.slice(i);
      first = first.reverse();
      s = first.concat(last);
    } else {
      i++;
    }
  }
  s = s.join('');
  return s;
}