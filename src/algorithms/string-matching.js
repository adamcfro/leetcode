/**
 * Given an array of strings words, returns all strings in words that are a
 * substring of another word.
 * 
 * A substring is a contiguous sequence of characters within a string.
 * 
 * @param {string[]} words - An array of string words
 * @returns {string[]} - Returns all strings that are substrings of another word
 */
function stringMatching (words) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      let k = 0;
      if (i !== j) {
        while (k < words[j].length) {
          if (words[i] === words[j].substring(k, k + words[i].length)) {
            if (!res.includes(words[i])) {
              res.push(words[i]);
              break;
            }
          }
          k++;
        }
      }
    }
  }
  return res;
}