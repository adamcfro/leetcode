/**
 * Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo 
 * attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More 
 * formally, an attack at second t will mean Ashe is poisoned during the 
 * inclusive time interval [t, t + duration - 1]. If Teemo attacks again before 
 * the poison effect ends, the timer for it is reset, and the poison effect 
 * will end duration seconds after the new attack.
 * 
 * Given a non-decreasing integer array timeSeries, where timeSeries[i] denotes 
 * that Teemo attacks Ashe at second timeSeries[i], and an integer duration, 
 * returns the total number of seconds that Ashe is poisoned.
 * 
 * @param {number[]} timeSeries - An array of times
 * @param {number} duration - A number denoting poison duration
 * @returns {number} - Returns the total number of seconds Ashe is poisoned
 */
function findPoisonedDuration (timeSeries, duration) {
  let res = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] + duration <= timeSeries[i + 1]) {
      res += duration;
    } else if (i + 1 === timeSeries.length) {
      res += duration;
    } else {
      res += timeSeries[i + 1] - timeSeries[i];
    }
  }
  return res;
}