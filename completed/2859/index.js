/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
  const result = [];
  for (let i=0; i<nums.length; i++) {
    const binaryString = i.toString(2);
    let count = 0;
    for (const c of i.toString(2)) {
      if (c === '1') {
        count++;
      }
    }

    if (count === k) {
      result.push(i)
    }
  }

  return result.reduce((sum, i) => sum + nums[i], 0);
};