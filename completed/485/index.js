/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;
  nums.forEach(n => {
    if (n === 0) {
      max = Math.max(count, max)
      count = 0;
    } else {
      count++;
    }
  })

  max = Math.max(count,max)

  return max;
};