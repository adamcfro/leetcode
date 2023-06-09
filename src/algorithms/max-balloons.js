/**
 * Given a string text, uses the characters of text to form as many instances
 * of the word 'balloon' as possible. Each character in text is used at most
 * once. Returns the maximum number of instances that can be formed.
 * 
 * @param {string} text - A string of lowercase English letters
 * @returns {number} - Returns a count of how many times 'balloon' can be formed
 */
function maxBalloons (text) {
  let count = 0;
  let letterCount = {};
  let balloon = 'balloon';
  for (let i = 0; i < text.length; i++) {
    letterCount[text[i]] = (letterCount[text[i]] || 0) + 1;
  }
  while (true) {
    for (let i = 0; i < balloon.length; i++) {
      if (letterCount[balloon[i]] > 0) {
        letterCount[balloon[i]]--;
      } else {
        return count;
      }
    }
    count++;
  }
}