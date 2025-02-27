/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const seenSet = new Set();
  const indexMap = new Map();

  arr.forEach((c, i) => {
    if (seenSet.has(c)) {
      indexMap.delete(c)
    } else {
      seenSet.add(c);
      indexMap.set(c, i)
    }
  })

  if (indexMap.size < k) {
    return ''
  }

  const keys = Array.from(indexMap.keys())
  return keys[k-1]
};