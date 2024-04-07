/**
 * Given a string array words, return an array of all characters that show up
 * in all strings within the words (including duplicates). You may return the
 * answer in any order.
 *
 * @format
 * @param {string[]} words - An array of strings of lowercase English letters
 * @returns {string[]} - Returns an array of characterss that exist in every
 *     string in words
 */

function commonChars(words) {
  let result = [];
  for (let i = 0; i < words[0].length; i++)
    for (let j = 1; j < words.length; j++) {
      if (!words[j].includes(words[0][i])) {
        break;
      } else {
        words[j] = words[j].replace(words[0][i], "");
      }
      if (j == words.length - 1) {
        result.push(words[0][i]);
      }
    }
  return result;
}
