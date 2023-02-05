/**
 * Given a string that represents the coordinates of a square of the chessboard,
 * returns true if the square is white, and false if the square is black.
 * 
 * @param {string} coordinates - A string representing a square on a chessboard
 * @returns {boolean} - Returns true if the coordinates represent a white square
 */
function squareIsWhite (coordinates) {
  let res = true;
  if (coordinates.charCodeAt(0) % 2 === 0 &&  coordinates[1] % 2 === 1) {
    res = true;
  } else if (coordinates.charCodeAt(0) % 2 === 1 && coordinates[1] % 2 === 0) {
    res = true;
  } else {
    res = false;
  }
  return res;
}