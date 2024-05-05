/**
 * A word is considered valid if, it contains a minimum of 3 characters, it
 * consists of the digits 0-9, and the uppercase and lowercase English letters
 * (not necessary to have all of them), it includes at least one vowel,  and it
 * includes at least one consonant.
 *
 * Given a string word, returns true if word is valid, otherwise, return false.
 *
 * @format
 * @param {string} word - A string of English letters and numbers
 * @returns {boolean} - Returns true if word is valid
 */

function isValid(word) {
  let vowel = false;
  let consonant = false;
  const vowels = "aeiouAEIOU";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  const nonValid = "@#$";
  if (word.length < 3) {
    return false;
  }
  for (const char of word) {
    if (nonValid.includes(char)) {
      return false;
    }
    if (vowels.includes(char)) {
      vowel = true;
    }
    if (consonants.includes(char)) {
      consonant = true;
    }
  }
  return vowel && consonant;
}
