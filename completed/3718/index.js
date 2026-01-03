/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
  const seen = new Set(nums);
  let res = k;

  while(seen.has(res)) {
    res += k;
  }

  return res;
};