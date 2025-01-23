/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  let char = [];

  for(let i = 0; i < s.length; i++) {
    if (s[i] === 'i') {
      char = char.reverse();
    } else {
      char.push(s[i])
    }
  }

  return char.join('');
};