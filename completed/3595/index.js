/**
 * @param {number[]} nums
 * @return {number[]}
 */
var onceTwice = function(nums) {
  const candidate = new Map();
  const nonCandidate = new Set();

  for (n of nums) {
    if (!nonCandidate.has(n)) {
      if (candidate.get(n) === 2) {
        nonCandidate.add(n);
        candidate.delete(n)
      } else {
        candidate.set(n, (candidate.get(n) || 0) + 1)
      }
    }
  }

  const result = [];
  candidate.forEach((v, k) => {
    if (v === 1) {
      result[0] = k;
    } else {
      result[1] = k;
    }
  })

  return result;
};