/**
 * @param {number} num
 * @return {number}
 */
const isDigitSumEven = (num) => {
  return num.toString().split('').reduce((sum, n) => sum + parseInt(n), 0) % 2;
}

var countEven = function(num) {
  let count = 0;
  for(let i=1; i<=num; i++) {
    if (isDigitSumEven(i) === 0) {
      count += 1;
    }
  }
  return count;
};