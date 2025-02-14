/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
  let min = Infinity;
  let max = -Infinity;

  for (let i=0; i<nums.length; i++) {
    const n = nums[i];
    min = Math.min(min, n);
    max = Math.max(max, n);
  }

  for (let i=0; i<nums.length; i++) {
    const n = nums[i];

    if(n > min && n < max) {
      return n;
    }
  }


  return -1;
};