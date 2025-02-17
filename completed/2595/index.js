/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
  const nBinary = n.toString(2).split('').reverse();
  let even = 0;
  let odd = 0;

  for (let i=0; i<nBinary.length; i++) {
    if (nBinary[i] === '1') {
      if (i % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }

  return [even, odd]
};