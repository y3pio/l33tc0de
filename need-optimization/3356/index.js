/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
  const nonZeroIndex = new Set();
  nums.forEach((n, i) => {
    if (n > 0) {
      nonZeroIndex.add(i);
    }
  })

  if (nonZeroIndex.size === 0) {
    return 0;
  }

  for (let i=0; i<queries.length; i++) {
    const [l, r, val] = queries[i];
    for (let j=l; j<=r; j++) {
      if (nums[j]>0) {
        nums[j] -= val;
      }

      if (nums[j] <= 0) {
        nonZeroIndex.delete(j);
      }
    }

    if (nonZeroIndex.size === 0) {
      return i+1;
    }
  }

  return -1;
};