/**
 * Given a shuffled sentence s containing no more than 9 words, reconstructs
 * and returns the original sentence.
 * 
 * A sentence is a list of words that are separated by a single space with no
 * leading or trailing spaces. Each word consists of lowercase and uppercase
 * English letters.
 * 
 * A sentence can be shuffled by appending the 1-indexed word position to
 * each word then rearranging the words in the sentence.
 * 
 * @param {string} s - A string sentence
 * @returns {string} - Returns a shuffled string
 */
function sortSentence (s) {
  let shuffledStr = '';
  let strArr = s.split(' ');
  strArr = strArr.sort(function(a, b) {
    return a[a.length - 1] - b[b.length - 1];
  });
  for (let i = 0; i < strArr.length; i++) {
    shuffledStr += strArr[i].slice(0, strArr[i].length - 1)
    if (!(i + 1 >= strArr.length)) {
      shuffledStr += ' ';
    }
  }
  return shuffledStr;
}