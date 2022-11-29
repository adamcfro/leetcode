/**
 * Given a signed 32-bit integer x, returns x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit range,
 * returns 0 instead.
 * 
 * @param {number} x - A number parameter
 * @returns {number} - Returns a reversed number or 0
 */
function reverse (x) {
  let res = '';
  let negative = false;
  if (x < 0) {
    x = -x;
    negative = true;
  }
  while (x > 0) {
    res += x % 10;
    x = Math.floor(x / 10);
  }
  res = Number(res);
  if (negative && res > Math.pow(2, 31)) {
    return 0;
  } else if (!negative && res > Math.pow(2, 31) - 1) {
    return 0;
  }
  if (negative) {
    res = res * -1;
  }
  return res;
}