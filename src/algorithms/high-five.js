/**
 * Given a list of the scores of different students, items,
 * where items[i] = [IDi, scorei] represents one score from a student with IDi,
 * calculate each student's top five average.
 *
 * Return the answer as an array of pairs result,
 * where result[j] = [IDj, topFiveAveragej] represents the student with IDj and
 * their top five average. Sort result by IDj in increasing order.
 *
 * A student's top five average is calculated by taking the sum of their top
 * five scores and dividing it by 5 using integer division.
 *
 * @format
 * @param {number[][]} items - A 2D array of student id's and scores
 * @returns {number[][]} - Returns a 2D array of student's averaged scores
 */

function highFive(items) {
  let res = [];
  let scores = {};
  for (let i = 0; i < items.length; i++) {
    if (scores[items[i][0]]) {
      scores[items[i][0]].push(items[i][1]);
    } else {
      scores[items[i][0]] = [items[i][1]];
    }
  }
  for (const [key, val] of Object.entries(scores)) {
    val.sort((a, b) => b - a);
    let sum = 0;
    let index = 0;
    while (index < 5) {
      sum += val[index];
      index++;
    }
    res.push([Number(key), Math.floor(sum / 5)]);
  }
  res.sort((a, b) => a[0] - b[0]);
  return res;
}
