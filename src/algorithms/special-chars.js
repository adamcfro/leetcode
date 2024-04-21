/**
 * Given a string word where a letter is called special if it appears both
 * in lowercase and uppercase in word, returns the number of special letters in
 * word.
 *
 * @format
 * @param {string} word - A string of uppercase and lowercase English letters
 * @returns {number} - Returns a count of special letters
 */

function numberOfSpecialChars(word) {
  let res = 0;
  let lowercase = new Array(26).fill(false);
  let uppercase = new Array(26).fill(false);
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (word[i] >= "a" && word[i] <= "z") {
      lowercase[charCode - 97] = true;
    } else {
      uppercase[charCode - 65] = true;
    }
  }
  for (let i = 0; i < 26; i++) {
    if (lowercase[i] !== false && uppercase[i] !== false) {
      res++;
    }
  }
  return res;
}
