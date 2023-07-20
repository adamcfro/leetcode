/**
 * This function takes an array words consisting of distinct strings. The string
 * words[i] can be paired with the string words[j] if:
 *   • The string words[i] is equal to the reversed string of words[j].
 *   • 0 <= i < j < words.length.
 * Returns the maximum number of pairs that can be formed from the array words.
 * 
 * @param {string[]} words - An array of strings of lowercase English letters
 * @returns {number} - Returns the maximum count of string pairs
 */
function maximumNumberOfStringPairs (words) {
  let count = 0;
  for (let i = 0; i < words.length - 1; i++) {
    let reversed = '';
    for (let index = words[i].length - 1; index >= 0; index--) {
      reversed += words[i][index];
    }
    for (let j = i + 1; j < words.length; j++) {
      if (words[j] === reversed) {
        count++;
      }
    }
  }
  return count;
}