/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length-1;
  let newDigit = digits[i] + 1;
  let carry = newDigit >= 10 ? Math.floor(newDigit/10) : 0;
  digits[i] = newDigit >= 10 ? newDigit % 10 : newDigit

  while (carry > 0 && i > 0) {
    i--;
    newDigit = digits[i] + carry;
    carry = newDigit >= 10 ? Math.floor(newDigit/10) : 0;
    digits[i] = newDigit >= 10 ? newDigit % 10 : newDigit
  }

  if (carry > 0) {
    return [carry, ...digits]
  }

  return digits;
};