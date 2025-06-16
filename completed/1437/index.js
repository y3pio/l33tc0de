/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  const dist = [];
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === 1) {
      dist.push(i)
    }
  }

  for (let i=0; i<dist.length-1; i++) {
    if (dist[i+1] - dist[i] <= k) {
      return false;
    }
  }

  return true;
};