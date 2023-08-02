/**
 * Given an integer array pref of size n, finds and returns the array arr of
 * size n that satisfies:
 *   • pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
 * Note that ^ denotes the bitwise-xor operation.
 * 
 * @param {number[]} pref - An array of numbers
 * @returns {number[]} - Returns a modifed array
 */
function findArray (pref) {
  let previous = pref[0];
  for (let i = 1; i < pref.length; i++) {
    let curr = pref[i];
    pref[i] = pref[i] ^ previous;
    previous = curr;
  }
  return pref;
}