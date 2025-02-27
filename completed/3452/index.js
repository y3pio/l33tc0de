/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
  let sum = 0;
  for(let i=0; i<nums.length; i++) {
    const left = nums[i-k] || -1;
    const right = nums[i+k] || -1;
    const curr = nums[i];
    if (curr > left && curr > right) {
      sum+= curr;
    }
  }

  return sum;
};