/**
 * You are given a string s of lowercase English letters and an integer array 
 * shifts of the same length. Call the shift() of a letter, the next letter in 
 * the alphabet, (wrapping around so that 'z' becomes 'a'). For example, shift
 * ('a') = 'b', shift('t') = 'u', and shift('z') = 'a'. Now for each 
 * shifts[i] = x, we want to shift the first i + 1 letters of s, x times.
 * 
 * Returns the final string after all such shifts to s are applied.
 * 
 * @param {string} s - A string of lowercase English letters
 * @param {number[]} shifts - An array of positive numbers
 * @returns {string} - Returns a string after shifts have been done
 */
function shiftingLetters (s, shifts) {
  let res = '';
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }
  for (let i = 0; i < s.length; i++) {
    res += String.fromCharCode((s[i].charCodeAt(0) - 97 + shifts[i]) % 26 + 97);
  }
  return res;
}