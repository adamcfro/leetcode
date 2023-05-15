/**
 * An asynchronous function that takes a positive integer millis, sleeps for the
 * given number of milliseconds, and returns a Promise object.
 * 
 * @param {Number} millis - A number representing milliseconds
 * @returns {Promise} - Returns a Promise object
 */
function sleep (millis) {
  return new Promise (resolve => setTimeout(resolve, millis));
}