/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
  let even = nums[0];
  let odd = 0;

  for(let i=1; i<nums.length; i++) {
    if (i%2 === 0) {
      even += nums[i]
    } else {
      odd += nums[i]
    }
  }

  return even - odd;
};