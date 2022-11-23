/**
 * Given a string of English letters, returns the greatest English letter which
 * occurs as both a lowercase and uppercase letter in s. The returned letter
 * should be in uppercase. If no such letter exists, returns an empty string.
 * 
 * @param {string} s - A string of letters
 * @returns {string} - Returns an uppercase letter or an empty string
 */
function greatestLetter (s) {
  let uniqueChars = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!uniqueChars.has(s[i])) {
      uniqueChars.add(s[i]);
    }
  }
  let res = '';
  uniqueChars.forEach(element => {
    if (uniqueChars.has(element.toUpperCase()) 
      && uniqueChars.has(element.toLowerCase())) {
      const asciiCode = element.toLowerCase().charCodeAt(0);
      console.log(asciiCode);
      if (asciiCode > res.toLowerCase().charCodeAt(0) || res === '') {
        res = element.toUpperCase();
      }
    }
  });
  return res;
}