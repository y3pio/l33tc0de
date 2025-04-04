/**
 * @param {number} n
 * @return {number[]}
 */

const hasZeros = (n) => {
  return n.toString().indexOf('0') !== -1;
}

var getNoZeroIntegers = function(n) {
  let compliment = n - 1;
  while (hasZeros(compliment) || hasZeros(n-compliment)) {
    compliment--;
  }

  return [n-compliment, compliment]
};