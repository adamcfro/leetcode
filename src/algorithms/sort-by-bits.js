/**
 * Given an integer array, sorts the integers in the array in ascending order 
 * by the number of 1's in their binary representation or sorted by their
 * integer value if two or more integers share the same number of 1's,
 * and returns the modified array.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number[]} - Returns a sorted array
 */
function sortByBits (arr) {
  let bitCount = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let binNum = arr[i].toString(2);
    while (binNum > 0) {
      if (binNum % 10 === 1) {
        count++;
      }
      binNum = Math.floor(binNum / 10);
    }
    bitCount.push([arr[i], count]);
  }
  bitCount.sort((a, b) => {
    return a[1] - b[1] || a[0] - b[0];
  });
  let res = [];
  for (let i = 0; i < bitCount.length; i++) {
    res.push(Number(bitCount[i][0]));
  }
  return res;
}