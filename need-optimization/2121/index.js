/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(arr) {
  const seenMap = new Map();
  arr.forEach((n, i) => {
    if (seenMap.has(n)) {
      const indices = seenMap.get(n);
      indices.push(i);
      seenMap.set(n, indices);
    } else {
      seenMap.set(n, [i])
    }
  })

  const result = arr.map((n, i) => {
    const sum = seenMap.get(n).reduce((currSum, seenIndex) => currSum + Math.abs(seenIndex - i), 0);
    return sum;
  })

  return result;
};