/**
 * Given a 0-indexed m x n integer matrix score, where each row represents one 
 * student and score[i][j] denotes the score the ith student got in the jth 
 * exam, this function sorts the students (i.e., the rows of the matrix) by 
 * their scores in the kth (0-indexed) exam from the highest to the lowest.
 * 
 * Returns the matrix after sorting it.
 * 
 * @param {number[][]} score - Exam scores for students
 * @param {number} k - The kth exam score for each student
 * @returns {number[][]} - Returns a sorted matrix
 */
function sortTheStudents (score, k) {
  score.sort((a, b) => {
    return b[k] - a[k] || b[1] - a[1];
  });
  return score;
}