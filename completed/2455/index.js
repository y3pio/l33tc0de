/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let sum = 0;
  let count = 0;

  nums.forEach(n => {
    if (n%2 === 0 && n%3 === 0) {
      sum += n;
      count++;
    }
  })

  return sum > 1 ? Math.floor(sum/count) : 0;
};