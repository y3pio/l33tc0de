/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
  const lowerS = s.toLowerCase();

  let count = 0;
  for (let i=1; i<lowerS.length; i++) {
    if (lowerS[i] !== lowerS[i-1]) {
      count++;
    }
  }

  return count;
};