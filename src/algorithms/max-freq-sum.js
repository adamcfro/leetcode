/**
 * You are given a string s consisting of lowercase English letters ('a' to
 * 'z'). Your task is to:
 * • Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum
 * frequency.
 * • Find the consonant (all other letters excluding vowels) with the maximum
 * frequency.
 * • Return the sum of the two frequencies.
 *
 * Note: If multiple vowels or consonants have the same maximum frequency, you
 * may choose any one of them. If there are no vowels or no consonants in the
 * string, consider their frequency as 0.
 *
 * The frequency of a letter x is the number of times it occurs in the string.
 *
 * @format
 * @param {string} s - A string of lowercase English letters.
 * @returns {number} - Returns the sum of the two frequencies.
 */

function maxFreqSum(s) {
  let maxCons = 0;
  let maxVowel = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  let charCount = {};
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }
  for (let [key, val] of Object.entries(charCount)) {
    if (vowels.includes(key)) {
      maxVowel = Math.max(maxVowel, val);
    } else {
      maxCons = Math.max(maxCons, val);
      console.log(maxCons);
    }
  }
  return maxCons + maxVowel;
}
