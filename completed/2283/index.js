/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  const countMap = new Map();

  for(let i=0; i<num.length; i++) {
    const n = num[i];
    if (countMap.has(n)) {
      const count = countMap.get(n);
      countMap.set(n, count + 1);
    } else {
      countMap.set(n, 1);
    }
  }

  for(let i=0; i<num.length; i++) {
    const occurrance = countMap.get(i.toString()) || 0
    if (parseInt(num[i]) !== occurrance) {
      return false;
    }
  }

  return true;
};