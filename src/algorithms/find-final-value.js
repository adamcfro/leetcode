
function findFinalValue (nums, original) {
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === original) {
      original *= 2;
    }
  }
  return original;
}