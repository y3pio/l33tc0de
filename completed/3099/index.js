/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  let sum = 0;
  let num = x;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num/10);
  }

  return x % sum === 0 ? sum : -1;
};