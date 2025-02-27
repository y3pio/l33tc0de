/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const seenSet = new Set();
  const uniqueSet = new Set();

  arr.forEach((c, i) => {
    if (!seenSet.has(c)) {
      uniqueSet.add(c)
    } else {
      uniqueSet.delete(c)
    }

    seenSet.add(c);
  })

  if (uniqueSet.size < k) {
    return ''
  }

  const keys = Array.from(uniqueSet)
  return keys[k-1]
};