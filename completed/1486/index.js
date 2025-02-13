/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  const nArr = []
  let xor = start + 2 * 0;
  for (let i=1; i<n; i++) {
    const curr = start + 2 * i;
    xor = xor ^ curr;
  }

  return xor;
};