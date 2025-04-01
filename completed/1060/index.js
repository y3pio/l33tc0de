/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  const result = [];
  for (let i = 0; i<nums.length-1; i++) {
    let curr = nums[i];
    let next = nums[i+1]
    while (curr + 1 !== next) {
      result.push(curr+1);
      curr++;

      if (result.length === k) {
        return result.pop()
      }
    }
  }

  return nums.pop() + k - result.length;
};