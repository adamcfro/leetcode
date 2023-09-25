/**
 * A bus has n stops numbered from 0 to n - 1 that form a circle. We know the
 * distance between all pairs of neighboring stops where distance[i] is the
 * distance between the stops number i and (i + 1) % n. The bus goes along both
 * directions (i.e. clockwise and counterclockwise).
 * 
 * Returns the shortest distance between the given start and destination stops.
 * 
 * @param {number[]} distance - An array of numbers representing distances
 * @param {number} start - A number representing a starting point
 * @param {number} destination - A number representing an ending point
 * @returns {number} - Returns the shortest distance between the given start 
 *     and destination stops
 */
function distanceBetweenBusStops (distance, start, destination) {
  let clockwise = 0;
  let counterClockwise = 0;
  if (start > destination) {
    [start, destination] = [destination, start];
  }
  for (let i = start; i < destination; i++) {
    clockwise += distance[i];
  }
  for (let i = 0; i < distance.length; i++) {
    counterClockwise += distance[i];
  }
  counterClockwise -= clockwise;
  return Math.min(clockwise, counterClockwise);
}