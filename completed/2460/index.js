/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
  const result = [];

  for (let i=0; i<nums.length; i++) {
    if (nums[i] === nums[i+1]) {
      nums[i] = nums[i]*2;
      nums[i+1] = 0
    }

    if (nums[i]) {
      result.push(nums[i])
    }
  }

  while (result.length !== nums.length) {
    result.push(0)
  }

  return result;
};