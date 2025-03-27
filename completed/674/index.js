/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let max = 0;
  let currCount = 0;
  let prev = 0;
  nums.forEach(n => {
    if (n > prev) {
      currCount++;
      prev = n;
    } else {
      max = Math.max(currCount, max);
      currCount = 1;
      prev = n;
    }
  })
  max = Math.max(currCount, max);
  return max;
};