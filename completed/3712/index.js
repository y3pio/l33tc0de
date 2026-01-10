/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
  const seen = new Map();
  for (n of nums) {
    seen.set(n, (seen.get(n) || 0) + 1)
  }

  let res = 0;
  seen.forEach((v, n) => {
    if (v % k === 0) {
      res += v * n
    }
  })

  return res;
};