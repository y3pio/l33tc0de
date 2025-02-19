/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
  let count = 0;
  let sum = 0;
  nums.forEach(n => {
    sum += n;
    if (sum === 0) {
      count++;
    }
  })

  return count;
};