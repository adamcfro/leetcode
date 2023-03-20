/**
 * There is a flowerbed in which some flowers need to be planted. However,
 * flowers cannot be planted in adjacent plots. Given an integer array flowerbed
 * containing 0's and 1's, where 0 means empty and 1 means not empty,
 * returns true if n new flowers can be planted in the flowerbed without being
 * planted adjacent to other flowers.
 * 
 * @param {number[]} flowerbed - An number array representing planted flowers
 * @param {number} n - The number of new flowers to plant
 * @returns {boolean} - Returns true if all new flowers can be planted
 */
function canPlaceFlowers (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 1) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i] = 1;
        n--;
      }
    }
    if (n <= 0) {
      return true;
    }
  }
  return false;
}