/**
 * Given an array of numbers releaseTimes, and a string of characters that were
 * pressed, returns the keypress that had the longest duration. If there are
 * multiple keypresses of the same duration, returns the lexicographically
 * largest key of the keypresses.
 * 
 * The duration of a keypress is releaseTimes[i] - releaseTimes[i - 1].
 * 
 * @param {number[]} releaseTimes - An array of numbers representing time
 * @param {string} keysPressed - A string of lowercase English characters
 * @returns {string} - Returns the string character that had the longest
 *     keypress duration
 */
function slowestKey (releaseTimes, keysPressed) {
  let res = [keysPressed[0], releaseTimes[0]];
  for (let i = 1; i < keysPressed.length; i++) {
    let duration = releaseTimes[i] - releaseTimes[i - 1];
    if (duration > res[1]) {
      res = [keysPressed[i], duration];
    } else if (duration === res[1]) {
      if (keysPressed[i] > res[0]) {
        res = [keysPressed[i], duration];
      }
    }
  }
  return res[0];
}