/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let max = -1;
  nums.forEach(n => {
    max = Math.max(max, n);
  })

  let result = 0;
  for (let i=0; i<k; i++) {
    result += max + i;
  }

  return result;
};