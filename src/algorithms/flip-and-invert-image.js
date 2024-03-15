/**
 * Given an n x n binary matrix image, flip the image horizontally, then invert
 * it, and return the resulting image.
 *
 * To flip an image horizontally means that each row of the image is reversed.
 * For example, flipping [1,1,0] horizontally results in [0,1,1]. To invert an
 * image means that each 0 is replaced by 1, and each 1 is replaced by 0. For
 * example, inverting [0,1,1] results in [1,0,0].
 *
 * @format
 * @param {number[][]} image - A 2D array of numbers
 * @returns {number[][]} - Returns a flipped 2D array
 */

function flipAndInvertImage(image) {
  let res = [];
  for (let i = 0; i < image.length; i++) {
    let row = [];
    for (let j = image[i].length - 1; j >= 0; j--) {
      if (image[i][j] === 1) {
        row.push(0);
      } else {
        row.push(1);
      }
    }
    res.push(row);
  }
  return res;
}
