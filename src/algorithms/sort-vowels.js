/**
 * Given a 0-indexed string s, permutes s to get a new string t such that:
 *   • All consonants remain in their original places. More formally, if there
 *     is an index i with 0 <= i < s.length such that s[i] is a consonant, then
 *     t[i] = s[i].
 *   • The vowels are sorted in the nondecreasing order of their ASCII
 *     values. More formally, for pairs of indices i, j with 0 <= i < j < s.
 *     length such that s[i] and s[j] are vowels, then t[i] must not have a
 *     higher ASCII value than t[j].
 * Returns the resulting string.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase
 * or uppercase. Consonants comprise all letters that are not vowels.
 *
 * @format
 * @param {string} s - A string of uppercase and lowercase English letters
 * @returns {string} - Returns a new string with sorted vowels
 */

function sortVowels(s) {
  let res = "";
  let vowels = [];
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      vowels.push(s[i]);
    }
  }
  vowels.sort();
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      res += vowels[j];
      j++;
    } else {
      res += s[i];
    }
  }
  return res;
}

/**
 * Takes in an English letter and returns true if the letter is a vowel
 *
 * @param {string} char - An uppercase or lowercase English letter
 * @returns {boolean} - Returns true if char is a vowel
 */
function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
  return false;
}
