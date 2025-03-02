/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  const map = new Map();

  nums1.forEach(n => {
    const [id, val] = n;
    if (map.has(id)) {
      map.set(id, map.get(id) + val)
    } else {
      map.set(id, val)
    }
  })

  nums2.forEach(n => {
    const [id, val] = n;
    if (map.has(id)) {
      map.set(id, map.get(id) + val)
    } else {
      map.set(id, val)
    }
  })

  const sortBy = (a,b) => {
    return a[0] - b[0]
  }

  return Array.from(new Map([...map.entries()].sort(sortBy)))
};