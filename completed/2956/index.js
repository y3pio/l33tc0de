/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  let answer1 = 0;
  let answer2 = 0;

  const map1 = new Map();
  const map2 = new Map();

  nums1.forEach(n => {
    const count = map1.get(n) || 0;
    map1.set(n, count + 1);
  })

  nums2.forEach(n => {
    const count = map2.get(n) || 0;
    map2.set(n, count + 1);
  })

  map1.forEach((val, key) => {
    if (map2.has(key)) {
      answer1 += val;
    }
  })

  map2.forEach((val, key) => {
    if (map1.has(key)) {
      answer2 += val;
    }
  })

  return [answer1, answer2]
};