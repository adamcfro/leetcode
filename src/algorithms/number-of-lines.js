/**
 * You are given a string s of lowercase English letters and an array widths 
 * denoting how many pixels wide each lowercase English letter is. Specifically,
 * widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.
 * 
 * You are trying to write s across several lines, where each line is no longer 
 * than 100 pixels. Starting at the beginning of s, write as many letters on 
 * the first line such that the total width does not exceed 100 pixels. Then, 
 * from where you stopped in s, continue writing as many letters as you can on 
 * the second line. Continue this process until you have written all of s
 * 
 * Returns an array result of length 2 where:
 *     • result[0] is the total number of lines.
 *     • result[1] is the width of the last line in pixels.
 * 
 * @param {number[]} widths - An array of numbers representing pixel widths
 * @param {string} s - A string of English letters
 * @returns {number[]} - Returns an array where arr[0] represents the number
 *     of lines used and arr[1] represents leftover pixels
 */
function numberOfLinees (widths, s) {
  let values = {};
  for (let i = 0; i < widths.length; i++) {
    values[String.fromCharCode(97 + i)] = widths[i];
  }
  let res = [1, 0];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (sum + values[s[i]] <= 100) {
      sum += values[s[i]];
    } else {
      res[0] += 1;
      sum = values[s[i]];
    }
  }
  res[1] = sum;
  return res;
}