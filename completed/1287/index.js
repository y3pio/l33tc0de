/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let max = {
    count: 0,
    num: 0,
  }

  const countMap = new Map();

  arr.forEach(n => {
    let currCount = countMap.get(n) || 0;
    currCount += 1;

    if (currCount > max.count) {
      max.count = currCount;
      max.num = n;
    }

    countMap.set(n, currCount);
  })

  return max.num;
};