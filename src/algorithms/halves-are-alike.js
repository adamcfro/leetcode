/**
 * Given a string s of even length, splits the string into two halves of equal
 * lengths, and returns true if both halves contain the same number of vowels.
 * 
 * @param {string} s - A string of consonants and vowels
 * @returns {boolean} - Returns true if each half of s contains the same
 *     number of vowels
 */
function halvesAreAlike (s) {
  let vowels = {
    'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0, 
    'A': 0, 'E': 0, 'I': 0, 'O': 0, 'U': 0
  };
  let count = 0;
  let mid = s.length / 2;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.hasOwnProperty(s[i])) {
      count++;
    }
    if (vowels.hasOwnProperty(s[mid + i])) {
      count--;
    }
  }
  return count === 0;
}