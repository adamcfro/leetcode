/**
 * Given an array of strings words and a character separator, splits each string
 * in words by separator and returns an array of strings containing the new
 * strings formed after the splits, excluding empty strings.
 * 
 * @param {string[]} words - Array of lowercase English letters and characters
 * @param {string} separator - A character from ".,|$#@" (excluding the quotes)
 * @returns {string[]} - Returns an array containing the new strings formed
 *     after the splits
 */
function splitWordsBySeparator (words, separator) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let splitWords = words[i].split(separator);
    for (let j = 0; j < splitWords.length; j++) {
      res.push(splitWords[j]);
    }
  }
  res = res.filter(e => e);
  return res;
}