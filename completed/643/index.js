/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = undefined;
  let curr = 0;
  let i=0;
  for (i=0; i<k; i++) {
    curr += nums[i]
  }

  max = max ? Math.max(max, curr/k) : curr/k

  while (i<nums.length) {
    curr -= nums[i-k]
    curr += nums[i];

    max = Math.max(max, curr/k);

    i++
  }

  return max;
};