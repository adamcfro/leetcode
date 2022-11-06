/**
 * Given a string word and a character ch, reverses the segment of word
 * that starts at index 0 and ends at the index of the first occurrence
 * of ch (inclusive), and returns a new string containing the reversed
 * segment along with the rest of the word.
 * 
 * If ch does not exist in the word, returns the original string.
 * 
 * @param {string} word - A string parameter
 * @param {string} ch - A single string character
 * @returns {string} - Returns a new string
 */
function reversePrefix (word, ch) {
  let res = '';
  if (!word.includes(ch)) {
    res = word;
  } else {
    let index = word.indexOf(ch);
    let end = word.substring(index + 1);
    while (index >= 0) {
      res += word[index];
      index--;
    }
    res += end;
  }
  return res;
}