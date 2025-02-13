/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  let result = '';

  for(let i=0; i<n-1; i++) {
    result += 'x';
  }

  result += n%2 === 0 ? 'y' : 'x'

  return result;
};