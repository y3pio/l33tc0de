/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  let ptr = 0;
  let left = nums[0];
  let right = 0;
  let result = 0;

  for (let i=1; i<nums.length; i++) {
    right += nums[i];
  }

  while (ptr < nums.length-1) {
    if ((left - right) % 2 === 0) {
      result++;
    }

    ptr++;
    const next = nums[ptr];
    left += next;
    right -= next;
  }

  return result;
};