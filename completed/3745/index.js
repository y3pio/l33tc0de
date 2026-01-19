/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
  nums.sort((a,b) => a - b);
  const n = nums.length - 1;
  return nums[n] + nums[n-1] - nums[0];
};