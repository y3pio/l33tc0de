/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  // Step 1: Convert the string into its corresponding numeric representation
  let numericString = '';
  for (let char of s) {
    numericString += char.charCodeAt(0) - 96; // 'a' is 1, 'b' is 2, ..., 'z' is 26
  }

  // Step 2: Transform the number by summing its digits k times
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum = 0;
    for (let digit of numericString) {
      sum += parseInt(digit, 10);
    }
    numericString = sum.toString();
  }

  return sum;
};