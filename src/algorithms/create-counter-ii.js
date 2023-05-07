/**
 * This function accepts an initial integer init and returns an object with 
 * three functions:
 *     • increment() increases the current value by 1 and then returns it.
 *     • decrement() decreases the current value by 1 and then returns it.
 *     • reset() sets the current value to init and then returns it.
 * 
 * @param {number} init - An initial starting value
 * @returns { increment: Function, decrement: Function, reset: Function } -
 *     Returns an object with three functions
 */
function createCounter (init) {
  let count = init;
  const increment = function () {
    count++;
    return count;
  }
  const decrement = function () {
    count--;
    return count;
  }
  const reset = function () {
    count = init;
    return count;
  }
  return {increment, decrement, reset};
}