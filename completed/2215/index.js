/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set();
  const set2 = new Set();

  nums1.forEach(n => {
    if(!nums2.includes(n)) {
      set1.add(n)
    }
  })

  nums2.forEach(n => {
    if(!nums1.includes(n)) {
      set2.add(n)
    }
  })

  return [Array.from(set1), Array.from(set2)]
};