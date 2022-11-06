/**
 * Given two integers x and y, returns the Hamming distance between them.
 * 
 * The Hamming distance between two integers is the number of positions
 * at which the corresponding bits are different.
 * 
 * @param {number} x - First number parameter
 * @param {number} y - Second number parameter
 * @returns {number} - Returns the Hamming distance between x and y
 */
function hammingDistance (x, y) {
  let distance = 0;
  let xBin = x.toString(2);
  let yBin = y.toString(2);
  const stringDiff = Math.abs(yBin.length - xBin.length);
  if (xBin.length < yBin.length) {
    xBin = xBin.padStart(stringDiff + xBin.length, '0');
  } else if (yBin.length < xBin.length) {
    yBin = yBin.padStart(stringDiff + yBin.length, '0');
  }
  for (let i = 0; i < xBin.length; i++) {
    if (xBin[i] !== yBin[i]) {
      distance++;
    }
  }
  return distance;
}