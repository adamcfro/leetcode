/**
 * Given a string s, sorts it in decreasing order based on the frequency of the
 * characters, and returns the sorted string.
 * 
 * @param {string} s - A string of English letters and digits
 * @returns {string} - Returns a sorted string
 */
function frequencySort (s) {
  let count = {};
  let arr = [];
  let res = '';
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const [key, val] of Object.entries(count)) {
    arr.push([key, val]);
  }
  arr.sort();
  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  for (const char of arr) {
    res += char[0].repeat(char[1]);
  }
  return res;
}