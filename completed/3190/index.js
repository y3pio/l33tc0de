/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  return nums.reduce((count, n) => {
    if (n % 3 !== 0) {
      count += 1;
    }

    return count;
  }, 0)
};