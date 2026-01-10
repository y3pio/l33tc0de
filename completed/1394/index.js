/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const seen = new Map();

  for (n of arr) {
    seen.set(n, (seen.get(n) || 0) + 1);
  }

  let result = -1;
  seen.forEach((val, key) => {
    if (val === key && key > result) {
      result = key;
    }
  })

  return result;
};