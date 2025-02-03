/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let maxSum = 0;
  let currSum = 0;
  for (let i=0; i<nums.length; i++) {
    currSum += nums[i];
    if (nums[i+1] <= nums[i]) {
      // reached the end of a sequence
      maxSum = Math.max(maxSum, currSum);
      currSum = 0;
    }
  }
  maxSum = Math.max(maxSum, currSum);

  return maxSum;
};
