/**
 * @param {number} big - The number of spots there are for big cars
 * @param {number} medium - The number of spots there are for medium cars
 * @param {number} small - The number of spots there are for small cars
 */
var ParkingSystem = function(big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/** 
 * @param {number} carType - A number denoting if a car is big(1), medium(2), 
 *     or small(3)
 * @return {boolean} - Returns true if all cars fit into the parking lot
 */
ParkingSystem.prototype.addCar = function(carType) {
  this.carType = carType;
  if (this.carType === 1) {
    if (this.big === 0) {
      return false;
    } else {
      this.big -= 1;
    }
  }
  if (this.carType === 2) {
    if (this.medium === 0) {
      return false;
    } else {
      this.medium -=1;
    }
  }
  if (this.carType === 3) {
    if (this.small === 0) {
      return false;
    } else {
      this.small -= 1;
    }
  }
  return true;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */