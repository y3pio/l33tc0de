/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const result = [];
  let sum = 0;
  for(let i=1; i<n; i++) {
    sum += i;
    result.push(i)
  }
  result.push(sum * -1);
  return result;
};