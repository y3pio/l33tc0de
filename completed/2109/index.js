/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  let result = '';
  let nextSpace = spaces.pop();
  for (let i=s.length-1; i>=0; i--) {
    if (i === nextSpace) {
      result = ` ${s[i]}${result}`;
      nextSpace = spaces.pop();
    } else {
      result = `${s[i]}${result}`;
    }

  }

  return result;
};