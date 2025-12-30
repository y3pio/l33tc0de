/**
 * @param {number} n
 * @return {number}
 */
const reverseN = (n) => {
  return parseInt(n.toString().split('').reverse().join(''))
}

var mirrorDistance = function(n) {
  const reversed = reverseN(n);
  return Math.abs(n - reversed);
};