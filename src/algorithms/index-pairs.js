/**
 * Given a string text and an array of strings words, returns an array of all
 * index pairs [i, j] so that the substring text[i...j] is in words.
 * 
 * Returns the pairs [i, j] in sorted order (i.e., sorts them by their first
 * coordinate, and in case of ties sorts them by their second coordinate).
 * 
 * @param {string} text - A string of English characters
 * @param {string[]} words - An array of string words
 * @returns {number[][]} - Returns pairs of starting and ending indices that
 *     map to the start and end of each word in words as they appear in text
 */
function indexPairs (text, words) {
  let res = [];
  for (const word of words) {
    for (let i = 0; i < text.length; i++) {
      if (word[0] === text[i]) {
        if (text.slice(i, i + word.length) === word) {
          res.push([i, i + word.length - 1]);
        }
      }
    }
  }
  res.sort((a, b) => {
    return a[0] - b[0] || a[1] - b[1];
  });
  return res;
}