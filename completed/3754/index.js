/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
  let sum = 0;
  let res = '';
  const nStr = n.toString();
  for (c of nStr) {
    if (c !== '0') {
      res += c;
      sum += parseInt(c);
    }
  }

  res = parseInt(res) || 0;
  return res * sum;
};