/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
  const sum = new Set();

  for (let i=0; i<nums.length-1; i++) {
    const currSum = nums[i] + nums[i+1];
    if (sum.has(currSum)) {
      return true;
    }

    sum.add(currSum);
  }

  return false;
};