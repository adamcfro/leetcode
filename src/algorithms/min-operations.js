/**
 * Given a binary string boxes of length n, where boxes[i] is '0' if the ith 
 * box is empty, and '1' if it contains one ball, returns an array answer of 
 * size n, where answer[i] is the minimum number of operations needed to move 
 * all the balls to the ith box.
 * 
 * In one operation, one ball can be moved from a box to an adjacent box. Each 
 * answer[i] is calculated considering the initial state of the boxes.
 * 
 * @param {string} boxes - A string representing the number of balls in boxes
 * @returns {number[]} - Returns the number of operations to move all balls to
 *     each box from their initial starting places
 */
function minOperations (boxes) {
  let answer = [];
  let i = 0;
  let j = 1;
  let operations = 0;
  while (i < boxes.length) {
    if (boxes[j] === '1' && j !== i) {
      operations += Math.abs(i - j);
    }
    j++;
    if (j >= boxes.length) {
      answer.push(operations);
      i++;
      j = 0;
      operations = 0;
    }
  }
  return answer;
}