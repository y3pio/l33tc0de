/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const seen = new Set();
  const result = [];
  for (let i=0; i<nums.length; i++) {
    if (seen.has(nums[i])) {
      result.push(nums[i])
    } else {
      seen.add(nums[i]);
    }
  }

  for (let i=1; i<=nums.length; i++) {
    if (!seen.has(i)) {
      result.push(i);
    }
  }

  return result;
};