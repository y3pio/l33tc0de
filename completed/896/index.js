/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {

  if (nums.length === 1) {
    return true;
  }

  let increasing = true;
  let decreasing = true;

  for (let i=0; i<nums.length-1; i++) {
    if (increasing && decreasing) {
      // Check to see if we need to determine
      if (nums[i] < nums[i+1]) {
        decreasing = false;
      } else if (nums[i] > nums[i+1]) {
        increasing = false;
      }
    } else {
      if (!increasing && nums[i] < nums[i+1]) {
        return false;
      } else if (!decreasing && nums[i] > nums[i+1]) {
        return false;
      }
    }
  }

  return true;
};