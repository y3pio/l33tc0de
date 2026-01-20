/**
 * @param {string} s
 * @return {number[]}
 */
var goodIndices = function(s) {
  const result = [];
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const target = String(i);
    const len = target.length;
    const start = i - len + 1;

    if (start >= 0 && s.substring(start, i + 1) === target) {
      result.push(i);
    }
  }

  return result;
};