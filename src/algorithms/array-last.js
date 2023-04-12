/**
 * This function can be called on all arrays and will return the last element
 * in any given array. If there are no elements, returns -1.
 * 
 * @returns {number} - Returns the last element of an array
 */
Array.prototype.last = function() {
  if (this.length < 1) {
    return -1;
  } else {
    return this[this.length - 1];
  }
}