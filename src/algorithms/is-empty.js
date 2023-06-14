/**
 * Given an object or an array, returns true if it is empty.
 * 
 * @param {Object | Array} obj - Object/Array that is the output of JSON.parse
 * @returns {boolean} - Returns true if the parameter is empty, false otherwise
 */
function isEmpty (obj) {
  if (obj.length > 0 || Object.keys(obj).length > 0) {
    return false;
  }
  return true;
}