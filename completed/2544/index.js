/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  const nStr = n.toString();
  let sum = 0;
  for (let i=0; i<nStr.length; i++) {
    let digit = parseInt(nStr[i]);

    if (i % 2 === 1) {
      digit = digit * -1;
    }

    sum += digit;
  }

  return sum;
};