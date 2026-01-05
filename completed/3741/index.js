/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
  const indexMap = new Map();
  let minDistance = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (!indexMap.has(nums[i])) {
      indexMap.set(nums[i], []);
    }
    indexMap.get(nums[i]).push(i);
  }

  for (const indices of indexMap.values()) {
    if (indices.length >= 3) {
      for (let i = 0; i <= indices.length - 3; i++) {
        const dist = Math.abs(indices[i] - indices[i + 1]) +
          Math.abs(indices[i + 1] - indices[i + 2]) +
          Math.abs(indices[i + 2] - indices[i]);
        minDistance = Math.min(minDistance, dist);

        if (minDistance === 0) {
          return 0;
        }
      }
    }
  }

  return minDistance === Infinity ? -1 : minDistance;
};