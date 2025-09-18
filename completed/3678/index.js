/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
  const seen = new Set();
  let sum = 0;
  nums.forEach(n => {
    sum += n;
    seen.add(n)
  });

  const avg = sum/nums.length;
  let candidate = Math.max(Math.ceil(avg), 1);
  while (seen.has(candidate) || candidate <= avg) {
    candidate++;
  }

  return candidate;
};