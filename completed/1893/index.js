/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  const rangeSet = new Set();
  ranges.forEach((range) => {
    let start = range[0];
    const end = range[1];

    while (start <= end) {
      rangeSet.add(start);
      start++
    }
  })

  for(let i=left; i<=right; i++) {
    if (!rangeSet.has(i)) {
      return false;
    }
  }

  return true;
};