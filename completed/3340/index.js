/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
  let evenSum = 0;
  let oddSum = 0;

  num.split('').forEach((n, i) => {
    if (i % 2 === 0) {
      evenSum += parseInt(n);
    } else {
      oddSum += parseInt(n);
    }
  })

  return evenSum === oddSum;
};