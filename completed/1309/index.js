/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let result = [];
  let i = s.length - 1;

  while (i >= 0) {
    if (s[i] === '#') {
      // Map two-digit number
      let num = parseInt(s.substring(i - 2, i));
      result.push(String.fromCharCode(96 + num));
      i -= 3; // Skip the two digits and '#'
    } else {
      // Map single-digit number
      let num = parseInt(s[i]);
      result.push(String.fromCharCode(96 + num));
      i--;
    }
  }

  return result.reverse().join('');
};