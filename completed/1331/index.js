/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a,b) => a-b);

  const indexMap = new Map();
  uniqueArr.forEach((n,i) => {
    indexMap.set(n, i+1);
  })

  return arr.map(n => indexMap.get(n));
};