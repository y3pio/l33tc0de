/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0) {
    return false;
  }

  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const sortedKeys = Array.from(freqMap.keys()).sort((a, b) => a - b);

  for (const num of sortedKeys) {
    const count = freqMap.get(num);
    if (count > 0) {
      for (let i = 0; i < k; i++) {
        const currentNum = num + i;
        if (freqMap.get(currentNum) === undefined || freqMap.get(currentNum) < count) {
          return false;
        }
        freqMap.set(currentNum, freqMap.get(currentNum) - count);
      }
    }
  }

  return true;
};