
function findTheArrayConcVal (nums) {
  let concVal = 0;
  while (nums.length > 0) {
    if (nums.length > 1) {
      let tempVal = String(nums[0]) + String(nums[nums.length - 1]);
      concVal += Number(tempVal);
      nums.pop();
      nums.shift();
    } else {
      concVal += nums[0];
      nums.pop();
    }
  }
  return concVal;
}