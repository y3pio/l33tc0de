/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const result = nums.reduce((acc, n) => {
    acc = acc.intersection(new Set(n));
    return acc;
  }, new Set(nums[0]))

  return Array.from(result).sort((a,b) => a-b);
};