/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  const seenSet = new Set();
  let largest = -1;
  nums.forEach(n => {
    seenSet.add(n)
  });

  nums.forEach(n => {
    if (seenSet.has(n * -1)) {
      largest = Math.max(n, largest);
    }
  });

  return largest;
};