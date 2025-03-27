/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  let min = Infinity;
  let max = -Infinity;

  nums.forEach(n => {
    min = Math.min(min, n);
    max = Math.max(max, n);
  })

  let candidate = min;
  while(max % candidate !== 0 || min % candidate !== 0) {
    candidate--;
  }

  return candidate;
};