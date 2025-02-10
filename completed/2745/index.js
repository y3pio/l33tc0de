/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
  if (x === y) {
    return (x + y + z) * 2;
  }

  let min = Math.min(x,y);
  return (2 * min + 1 + z) * 2
};