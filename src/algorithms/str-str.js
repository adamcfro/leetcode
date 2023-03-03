/**
 * Given two strings needle and haystack, returns the index of the first
 * occurrence of needle in haystack or -1 if needle is not part of haystack.
 * 
 * @param {string} haystack - A string of lowercase English characters
 * @param {string} needle - A string that is possibly part of haystack
 * @returns {number} - Returns the starting index of needle in haystack
 */
function strStr (haystack, needle) {
  let needleLength = needle.length;
  let haystackLength = haystack.length;
  if (haystackLength < needleLength) {
    return -1;
  }
  for (let i = 0; i < haystackLength; i++) {
    if (haystack.substring(i, i + needleLength) === needle) {
      return i;
    }
  }
  return -1;
}