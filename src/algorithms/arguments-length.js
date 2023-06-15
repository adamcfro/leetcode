/**
 * This function returns the count of arguments passed to it.
 * 
 * @param  {...any} args - A valid JSON array
 * @returns {number} - Returns the number of arguments passed to the function
 */
function argumentsLength (...args) {
  return arguments.length;
}