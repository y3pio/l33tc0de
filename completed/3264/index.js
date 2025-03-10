/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  while (k > 0) {
    let min = {
      value: Infinity,
      index: -1
    }

    nums.forEach((n, i) => {
      if (n < min.value) {
        min.value = n;
        min.index = i;
      }
    })

    nums[min.index] = nums[min.index] * multiplier;

    k--;
  }

  return nums;
};