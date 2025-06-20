/**
 * @param {number} n
 * @return {number}
 */
const alpha = ['zero','one','two','three','four','five','six','seven','eight','nine']
var countOddLetters = function(n) {
  const nArr = n.toString().split('').map(Number);
  const count = new Map();

  nArr.forEach(n => {
    const word = alpha[n];
    for (const c of word) {
      count.set(c, (count.get(c) || 0) + 1);
    }
  })

  let result = 0;
  count.forEach((val) => {
    if (val % 2 === 1) {
      result++;
    }
  })

  return result;
};