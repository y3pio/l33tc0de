/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  let count = 0;
  for (let i=0; i<nums.length-1; i++) {
    for (let j=i+1; j<nums.length; j++) {
      const x = nums[i];
      const y = nums[j];
      if (x+y < target) {
        count++;
      }
    }
  }

  return count;
};