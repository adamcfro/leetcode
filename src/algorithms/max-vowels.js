/**
 * Given a string s and an integer k, returns the maximum number of vowel
 * letters in any substring of s with length k.
 * 
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 * 
 * @param {string} s - A string of lowercase English letters
 * @param {number} k - A number representing the length of a substring
 * @returns {number} - Returns the max number of vowels in substring of length k
 */
function maxVowels (s, k) {
  let maxCount = 0;
  let tempCount = 0;
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      tempCount++;
    }
  }
  maxCount = tempCount;
  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i - k])) {
      tempCount--;
    }
    if (isVowel(s[i])) {
      tempCount++;
    }
    maxCount = Math.max(tempCount, maxCount);
  }
  return maxCount;
}

/**
 * Takes in a lowercase English letter char and returns true if char is a vowel.
 * 
 * @param {string} char - A lowercase English letter
 * @returns {boolean} - Returns true if char is a vowel
 */
function isVowel (char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
}