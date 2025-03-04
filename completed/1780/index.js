/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  return n.toString(3).split('').every(i => i==='0' || i==='1')
};