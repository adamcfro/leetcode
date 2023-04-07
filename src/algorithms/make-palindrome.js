/**
 * Given a string s consisting of lowercase English letters, in one operation,
 * one character in s can be changed to any other character. Returns true if
 * s can be made into a palindrome after performing at most two operations.
 * 
 * @param {string} s - A string of lowercase English letters
 * @returns {boolean} - Returns true if s can be made into a palindrome
 */
function makePalindrome (s) {
  let count = 0;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      count++;
    }
    left++;
    right--;
  }
  return count <= 2;
}