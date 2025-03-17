/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const seenSet = new Set();
  nums.forEach(n => {
    if (!seenSet.has(n)) {
      seenSet.add(n)
    } else {
      seenSet.delete(n)
    }
  })

  return seenSet.size === 0;
};