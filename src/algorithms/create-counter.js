/**
 * Takes an integer n and returns a counter function. The counter function
 * initially returns n and the returns one more than the previous value every
 * subsequent time it is called.
 * 
 * @param {number} n - A number parameter
 * @returns {Function} - Returns a function that increments a counter
 */
function createCounter (n) {
  return function () {
    return n++;
  }
}