/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  let max = 1;

  let inc = 1
  let dec = 1;
  for (let i=1; i<nums.length; i++) {
    if (nums[i] > nums[i-1]) {
      inc++;
      max = Math.max(max, dec)
      dec = 1;
    } else if (nums[i] < nums[i-1]) {
      dec++;
      max = Math.max(max, inc)
      inc = 1;
    } else if (nums[i] === nums[i-1]) {
      max = Math.max(max, Math.max(inc, dec))
      inc = 1;
      dec = 1;
    }
  }

  max = Math.max(max, Math.max(inc, dec))

  return max;
};