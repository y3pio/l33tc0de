/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const result = [];

  for (let i=0; i<nums.length; i++) {
    if (result[index[i]] === undefined) {
      result[index[i]] = nums[i];
    } else {
      result.splice(index[i], 0, nums[i])
    }
  }

  return result;
};