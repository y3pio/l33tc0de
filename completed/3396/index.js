/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const seen = new Set();
  let i = nums.length - 1;
  while (i >= 0) {
    const curr = nums[i];
    if (seen.has(curr)){
      break;
    }

    seen.add(curr);
    i--;
  }
  return Math.ceil((i+1)/3)
};