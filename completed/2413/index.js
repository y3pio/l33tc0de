/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  let i = n;
  while (!(i % 2 === 0 && i % n === 0)) {
    i++;
  }

  return i;
};