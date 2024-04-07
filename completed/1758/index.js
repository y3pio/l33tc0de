/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let swap0 = 0, swap1 = 0
  for (let i = 0; i < s.length; i++) {
    i % 2 != s[i] ? swap0++ : swap1++
  }
  return Math.min(swap0, swap1)
};

console.clear();

console.log(minOperations('1111'));