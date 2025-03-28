/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function(coordinates, k) {
  let result = 0;
  const memo = new Map();

  for (const [x, y] of coordinates) {
    for (let i = 0; i <= k; i++) {
      const targetX = x ^ i;
      const targetY = y ^ (k - i);
      const key = `${targetX},${targetY}`;
      if (memo.has(key)) {
        result += memo.get(key);
      }
    }
    const key = `${x},${y}`;
    memo.set(key, (memo.get(key) || 0) + 1);
  }

  return result;
};