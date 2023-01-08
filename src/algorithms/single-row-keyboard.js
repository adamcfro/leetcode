/**
 * Given a string keyboard of length 26 indicating the layout of the keyboard
 * (indexed from 0 to 25), and starting from index 0, returns a count of how
 * many moves it takes to type out the parameter word.
 * 
 * To type a character, you have to move your finger to the index of the 
 * desired character. The time it takes to move from index i to index j is 
 * Math.abs(i - j).
 * 
 * @param {string} keyboard - An string containing all lowercase English letters
 * @param {string} word - A string of lowercase English letters
 * @returns {number} - Returns a count of moves to type out word
 */
function calculateTime (keyboard, word) {
  let count = 0;
  let index = 0;
  let current = 0;
  for (let i = 0; i < word.length; i++) {
    current = keyboard.indexOf(word[i]);
    count += Math.abs(current - index);
    index = current;
  }
  return count;
}