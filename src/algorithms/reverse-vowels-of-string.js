/**
 * Given a string s, reverses the positions of all the vowels in the string
 * and returns it.
 * 
 * Vowels consist of 'a', 'e', 'i', 'o', and 'u', and can appear in both
 * upper and lower cases.
 * 
 * @param {string} s - A string parameter
 * @returns {string} - Returns a modified string with vowels in reverse order
 */
function reverseVowels (s) {
  s = s.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0, j = s.length - 1; i < j; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      let temp = s[i];
      while (!vowels.includes(s[j].toLowerCase())) {
        j--;
        if (i >= j) {
          break;
        }
      }
      s[i] = s[j];
      s[j] = temp;
      j--;
    }
  }
  return s.join('');
}