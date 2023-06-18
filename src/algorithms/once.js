/**
 * Given a function fn, returns a new function that is identical to the original
 * function except that it ensures fn is called at most once.
 *     • The first time the returned function is called, it should return the
 *       same result as fn.
 *     • Every subsequent time it is called, it should return undefined.
 * 
 * @param {Function} fn - A function parameter
 * @returns {Function} - Returns a new function
 */
function once (fn) {
  let res;
  let fnCalled = false;
  return function(...args) {
    if (!fnCalled) {
      res = fn(...args);
      fnCalled = true;
      return res;
    } else {
      return undefined;
    }
  }
}