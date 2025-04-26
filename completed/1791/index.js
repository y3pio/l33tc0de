/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const countMap = new Map();

  edges.forEach(edge => {
    const [src, dest] = edge;
    countMap.set(src, (countMap.get(src) || 0) + 1);
    countMap.set(dest, (countMap.get(dest) || 0) + 1);
  })

  let result = {
    count: 0,
    key: undefined
  }

  countMap.forEach((count, key) => {
    if (count > result.count) {
      result.count = count;
      result.key = key
    }
  })

  return result.key;
};