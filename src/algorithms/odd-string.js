/**
 * Given an array of equal-length strings words where each string words[i] can 
 * be converted into a difference integer array difference[i] of length n - 1 
 * where:
 *     • difference[i][j] = words[i][j+1] - words [i][j] where 0 <= j <= n - 2. 
 * 
 * Note that the difference between two letters is the difference between their 
 * positions in the alphabet:
 *     • i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.
 *     • for the string "acb", the difference integer array is 
 *       [2 - 0, 1 - 2] = [2, -1].
 * 
 * All the strings in words have the same difference integer array, except one. 
 * Returns the string in words that has different difference integer array.
 * 
 * @param {string[]} words - An array of strings of lowercase English letters
 * @returns {string} - Returns the string with a different difference array
 */
function oddString (words) {
  let compareDiff = {};
  for (let i = 0; i < words.length; i++) {
    let temp = [];
    for (let j = 0; j < words[i].length - 1; j++) {
      temp.push(words[i].charCodeAt(j + 1) - words[i].charCodeAt(j));
    }
    if (compareDiff[temp] === undefined) {
      compareDiff[temp] = [words[i]];
    } else {
      compareDiff[temp].push(words[i]);
    }
  }
  for (const val of Object.values(compareDiff)) {
    if (val.length === 1) {
      return val.toString();
    }
  }
}