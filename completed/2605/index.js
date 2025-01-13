/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
  let min1 = Infinity;
  let min2 = Infinity;
  let minBoth = Infinity;
  const seenSet = new Set();

  while(nums1.length || nums2.length) {

    const n1 = nums1.pop();
    const n2 = nums2.pop();

    if (n1 && seenSet.has(n1)) {
      minBoth = Math.min(minBoth, n1);
    } else {
      seenSet.add(n1)
    }

    if (n2 && seenSet.has(n2)) {
      minBoth = Math.min(minBoth, n2);
    } else {
      seenSet.add(n2)
    }

    if (n1) {
      min1 = Math.min(n1, min1);
    }

    if (n2) {
      min2 = Math.min(n2, min2);
    }
  }

  if (minBoth < Infinity) {
    return minBoth;
  }

  return min1 < min2 ? parseInt(`${min1}${min2}`) : parseInt(`${min2}${min1}`)
};
