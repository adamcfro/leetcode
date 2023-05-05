/**
 * Returns a new function that always returns "Hello World".
 * 
 * @returns {Function} - Returns a function that returns "Hello World"
 */
function createHelloWorld () {
  return function (...args) {
    return "Hello World";
  }
}