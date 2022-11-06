/**
 * Given an array of strings words, returns the first palindromic string
 * in the array. If there is no such string, returns an empty string.
 * 
 * A string is palindromic if it reads the same forward and backward.
 * 
 * @param {string[]} words - An array of strings
 * @returns {string} - Returns first palindromic string found or returns ''
 */
function firstPalindrome (words) {
  for (let i = 0; i < words.length; i++) {
    let left = 0;
    let right = words[i].length - 1;
    while (left <= right + 1) {
      if (words[i][left] !== words[i][right]) {
        break;
      } else if (left >= right) {
        return words[i];
      } else {
        left++;
        right--;
      }
    }
  }
  return '';
}