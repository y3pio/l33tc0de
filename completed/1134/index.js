/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
  const nStr = n.toString();
  const exponent = nStr.length;

  let total = 0;
  for(c of nStr) {
    total += Math.pow(parseInt(c), exponent);
  }

  return total === n;
};