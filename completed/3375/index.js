/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let count = 0;
  const seen = new Set();
  for(let i = 0; i<nums.length; i++) {
    if (nums[i] < k) {
      return -1;
    } else if (nums[i] > k && !seen.has(nums[i])) {
      count++;
      seen.add(nums[i])
    }
  }

  return count;
};