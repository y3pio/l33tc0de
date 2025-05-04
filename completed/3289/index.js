/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  const seen = new Set();
  const dupe = new Set();

  nums.forEach(n => {
    if (seen.has(n)) {
      dupe.add(n)
    }

    seen.add(n);
  })

  return Array.from(dupe);
};