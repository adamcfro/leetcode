/**
 * Given two sentences s1 and s2, returns a list of all the uncommon words.
 * 
 * A word is uncommon if it appears exactly once in one of the sentences, and
 * does not appear in the other sentence.
 * 
 * @param {string} s1 - First string of lowercase letters
 * @param {string} s2 - Second string of lowercase letters
 * @returns {string[]} - Returns an array of uncommon strings
 */
function uncommonFromSentences (s1, s2) {
  let res = [];
  let wordCount = {};
  s1 = s1.split(' ');
  s2 = s2.split(' ');
  for (const word of s1) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  for (const word of s2) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  for (const [key, val] of Object.entries(wordCount)) {
    if (val === 1) {
      res.push(key);
    }
  }
  return res;
}