/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
  return parseInt(n.toString()
    .split('')
    .filter(e => e !== '0')
    .join(''));
};