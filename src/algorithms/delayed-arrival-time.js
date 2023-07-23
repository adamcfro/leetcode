/**
 * Given an integer arrivalTime denoting the arrival time of a train in hours 
 * and an integer delayedTime denoting the amount of delay in hours, returns
 * the time when the train will arrive at the station in a 24-hour format.
 * 
 * @param {number} arrivalTime - A number representing when a train will arrive
 * @param {number} delayedTime - A number representing the train delay
 * @returns {number} - Returns the new arrival time of the train
 */
function findDelayedArrivalTime (arrivalTime, delayedTime) {
  let newTime = arrivalTime + delayedTime;
  if (newTime < 24) {
    return newTime;
  } else {
    return newTime - 24;
  }
}