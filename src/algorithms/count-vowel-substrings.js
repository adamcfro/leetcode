/**
 * A substring is a contiguous (non-empty) sequence of characters within a
 * string. A vowel substring is a substring that only consists of vowels ('a',
 * 'e', 'i', 'o', and 'u') and has all five vowels present in it.
 *
 * Given a string word, return the number of vowel substrings in word.
 *
 * @format
 * @param {string} word - A string of lowercase English letters
 * @returns {number} - Returns a count of vowel substrings
 */

function countVowelSubstrings(word) {
  let count = 0;
  for (let i = 0; i <= word.length - 5; i++) {
    let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let j = i; j < word.length; j++) {
      if (vowels[word[j]] !== undefined) {
        vowels[word[j]] = vowels[word[j]] !== 0 ? vowels[word[j]] + 1 : 1;
      } else {
        break;
      }
      if (
        vowels["a"] > 0 &&
        vowels["e"] > 0 &&
        vowels["i"] > 0 &&
        vowels["o"] > 0 &&
        vowels["u"] > 0
      ) {
        count++;
      }
    }
  }
  return count;
}
