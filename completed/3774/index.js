/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
  nums.sort((a,b) => a-b);
  let i=1;
  let small=0;
  let big=0;
  while(i <= k) {
    small += nums[i-1];
    big += nums[nums.length - i]
    i++;
  }

  return Math.abs(big - small);
};