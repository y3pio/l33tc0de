/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const intersectionSet = new Set();

  nums1.forEach(n => {
    if (nums2.indexOf(n) >= 0) {
      intersectionSet.add(n)
    }
  })

  return Array.from(intersectionSet);
};
