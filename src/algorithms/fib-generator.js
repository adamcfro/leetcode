/**
 * This generator function returns a generator object which yields the fibonacci
 * sequence.
 * 
 * The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2. The 
 * first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
 * 
 * @return {Generator<number>} - Returns a generator object that yields the
 *     fibonacci sequence
 */
function fibGenerator () {
  let current = 0;
  let next = 1;
  while (true) {
    yield current;
    let temp = current;
    current = next;
    next += temp;
  }
};