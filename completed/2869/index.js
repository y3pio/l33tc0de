/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const seenSet = new Set(Array.from(Array(k).keys(), (_,i) => i+1));

  let count = 0;
  while(seenSet.size > 0 && nums.length > 0) {
    const curr = nums.pop();
    count++;
    seenSet.delete(curr);
  }

  return count;
};