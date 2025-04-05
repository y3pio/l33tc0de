/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  const stack = [];

  let curr = '';
  let result = '';
  for (const c of s ) {
    curr += c;
    if (c === '(') {
      stack.push(c)
    } else {
      stack.pop();
    }

    if (stack.length === 0) {
      result += curr.substring(1,curr.length-1);
      curr = ''
    }
  }

  return result;
};