/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
  let candidate = Math.abs(nums[0] - nums[nums.length-1]);
  for (let i=0; i<nums.length-1; i++) {
    const first = nums[i];
    const second = nums[i+1];
    candidate = Math.max(Math.abs(first - second), candidate);
  }

  return candidate;
};