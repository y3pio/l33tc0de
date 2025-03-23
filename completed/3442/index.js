/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  const freq = new Map();

  for(c of s) {
    let count = freq.get(c) || 0;
    count++;
    freq.set(c, count)
  }

  let maxOdd = -1;
  let minEven = Infinity;

  freq.forEach(count => {
    if (count % 2 === 0) {
      minEven = Math.min(minEven, count)
    } else {
      maxOdd = Math.max(maxOdd, count)
    }
  })

  return maxOdd - minEven;
};