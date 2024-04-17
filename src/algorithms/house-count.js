/**
 * Definition for a street.
 *
 * The class Street contains the following functions which may help you:
 *   • void openDoor(): Open the door of the house you are in front of.
 *   • void closeDoor(): Close the door of the house you are in front of.
 *   • boolean isDoorOpen(): Returns true if the door of the current house is
 *     open and false otherwise.
 *   • void moveRight(): Move to the right house.
 *   • void moveLeft(): Move to the left house.
 *
 * @format
 * @param {number[]} doors constructor(doors);
 * @return {void} openDoor();
 * @return {void} closeDoor();
 * @return {boolean} isDoorOpen();
 * @return {void} moveRight();
 * @return {void} moveLeft();
 *
 * class Street {}
 */

/**
 * You are given an object street of class Street that represents a circular
 * street and a positive integer k which represents a maximum bound for the
 * number of houses in that street (in other words, the number of houses is
 * less than or equal to k). Houses' doors could be open or closed initially.
 *
 * Initially, you are standing in front of a door to a house on this street.
 * Your task is to count the number of houses in the street.
 *
 * Return ans which represents the number of houses on this street.
 *
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
function houseCount(street, k) {
  let res = 0;
  for (let i = 0; i < k; i++) {
    if (street.isDoorOpen()) {
      street.closeDoor();
      street.moveRight();
    } else {
      street.moveRight();
    }
  }
  street.openDoor();
  res++;
  street.moveRight();
  while (!street.isDoorOpen()) {
    res++;
    street.moveRight();
  }
  return res;
}
