/**
 * Given a string s, removes the vowels 'a', 'e', 'i', 'o', and 'u' from it.
 * Returns the modified string.
 * 
 * @param {string} s - A string consisting of lowercase English letters
 * @returns {string} - Returns a modified string with all vowels removed
 */
function removeVowels (s) {
  return s.replace(/[aeiou]/gi, '');
}