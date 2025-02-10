/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  const ones = []
  const zeros = []

  for(let i=0; i<s.length; i++) {
    if (s[i] === '0') {
      zeros.push('0')
    } else {
      ones.push('1');
    }
  }

  const lastOne = ones.pop();
  const result = [...ones, ...zeros, lastOne].join('');
  return result;
};