/**
 * This function helps developers test their code. It takes in any value val 
 * and returns an object with the following two functions
 *     • toBe(val) accepts another value and returns true if the two values 
 *       === each other. If they are not equal, it should throw an error "Not 
 *       Equal".
 *     • notToBe(val) accepts another value and returns true if the two values 
 *       !== each other. If they are equal, it should throw an error "Equal".
 * 
 * @param {string} val - A string parameter
 * @returns {Object} - Returns an object with two functions
 */
function expect (val) {
  let toBe = function (num) {
    if (val === num) {
      return true;
    } else {
      throw new Error('Not Equal');
    }
  }
  let notToBe = function (num) {
    if (val !== num) {
      return true;
    } else {
      throw new Error('Equal');
    }
  }
  return {toBe, notToBe};
}