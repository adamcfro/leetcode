/**
 * You are given a string s that contains some bracket pairs, with each pair 
 * containing a non-empty key.
 *   • For example, in the string "(name)is(age)yearsold", there are two 
 *     bracket pairs that contain the keys "name" and "age".
 * You know the values of a wide range of keys. This is represented by a 2D 
 * string array knowledge where each knowledge[i] = [keyi, valuei] indicates 
 * that key keyi has a value of valuei.
 * 
 * You are tasked to evaluate all of the bracket pairs. When you evaluate a 
 * bracket pair that contains some key keyi, you will:
 *   • Replace keyi and the bracket pair with the key's corresponding valuei.
 *   • If you do not know the value of the key, you will replace keyi and the 
 *     bracket pair with a question mark "?" (without the quotation marks).
 * Each key will appear at most once in your knowledge. There will not be any 
 * nested brackets in s.
 * 
 * Return the resulting string after evaluating all of the bracket pairs.
 * 
 * @param {string} s - A string of lowercase English letters and round brackets
 * @param {string[][]} knowledge - A 2D array of strings
 * @returns {string} - Returns a new string after evaluating bracket pairs
 */
function evaluate (s, knowledge) {
  let res = '';
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      i++;
      while (s[i] !== ')') {
        temp += s[i];
        i++;
      }
      if (knowledge.length === 0) {
        res += '?';
      }
      for (let j = 0; j < knowledge.length; j++) {
        if (temp === knowledge[j][0]) {
          res += knowledge[j][1];
          break;
        } else if (j + 1 === knowledge.length) {
          res += '?';
        }
      }
      temp = '';
    } else {
      res += s[i];
    }
  }
  return res;
}