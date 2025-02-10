/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  const seenMap = new Map();
  let count = 0;

  for (let i=0; i<nums.length; i++) {
    const n = nums[i];
    if (seenMap.has(n)) {
      const prevIndexes = seenMap.get(n);
      prevIndexes.forEach(prevIndex => {
        if ((prevIndex * i) % k === 0) {
          count++;
        }
      })
      prevIndexes.push(i);
      seenMap.set(n, prevIndexes);

    } else {
      seenMap.set(n, [i]);
    }

  }

  return count;
};