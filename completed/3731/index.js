/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
  let min = Infinity;
  let max = -Infinity;
  const seen = new Set();

  for (n of nums) {
    seen.add(n);
    min = Math.min(min, n);
    max = Math.max(max, n);
  }

  const result = [];

  for(let i=min; i<=max; i++) {
    if (!seen.has(i)) {
      result.push(i)
    }
  }

  return result;
};