/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let nonZeroSet = new Set();
  let min = Infinity;

  for(let i=0; i<nums.length; i++) {
    const n = nums[i];
    if (n !== 0) {
      min = Math.min(n, min);
      nonZeroSet.add(n)
    }
  }


  let count = 0;
  while(nonZeroSet.size > 0) {
    count++;
    nonZeroSet.delete(min);
    const subtract = min;

    min = Infinity
    const newNonZeroSet = new Set();
    nonZeroSet.forEach(n => {
      if (n - subtract > 0) {
        newNonZeroSet.add(n - subtract)
        min = Math.min(min, n - subtract)
      }
    })

    nonZeroSet = newNonZeroSet;
  }

  return count;
};