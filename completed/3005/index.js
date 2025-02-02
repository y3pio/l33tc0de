/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  const seenMap = new Map();
  let maxOcc = 1;
  nums.forEach(n => {
    if (seenMap.has(n)) {
      const newCount = seenMap.get(n) + 1;
      maxOcc = Math.max(maxOcc, newCount);
      seenMap.set(n, newCount);
    } else {
      seenMap.set(n,1);
    }
  });

  let result = 0;
  seenMap.forEach((value, key) => {
    if (value === maxOcc) {
      result += value;
    }
  })

  return result;
};