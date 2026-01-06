/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
  const count = new Map();
  const nStr = n.toString();
  for (let i=0; i<nStr.length; i++) {
    const curr = nStr[i];
    if (count.has(curr)) {
      count.set(curr, count.get(curr) + 1)
    } else {
      count.set(curr, 1)
    }
  }

  let candidate = {
    count: Infinity,
    key: undefined
  }

  count.forEach((v,k) => {
    const key = parseInt(k)
    if (v < candidate.count || (v <= candidate.count && key < candidate.key)) {
      candidate.count = v;
      candidate.key = key;
    }
  })

  return candidate.key;
};